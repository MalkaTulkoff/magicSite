import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Animation keyframes
const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const blink = keyframes`
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0.5;
  }
`;

// Container for all animations
const AnimationContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
  z-index: 5;
`;

// Traffic Light Balloon component
const TrafficLightBalloon = styled.div`
  position: absolute;
  width: 50px;
  height: 120px;
  background-color: #333;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px 0;
  top: ${props => props.top || '50px'};
  left: ${props => props.left || '50px'};
  animation: ${bounce} 5s ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));

  &::before {
    content: '';
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 30px;
    background-color: #999;
  }
`;

const TrafficBalloonLight = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => {
    switch(props.color) {
      case 'red': return props.active ? '#ff3333' : '#661111';
      case 'yellow': return props.active ? '#ffff33' : '#666611';
      case 'green': return props.active ? '#33ff33' : '#116611';
      default: return '#333';
    }
  }};
  box-shadow: ${props => props.active ? `0 0 15px ${props.color === 'red' ? '#ff3333' : props.color === 'yellow' ? '#ffff33' : '#33ff33'}` : 'none'};
  animation: ${props => props.active ? blink : 'none'} ${props => props.color === 'yellow' ? '0.5s' : '2s'} ease-in-out infinite;
`;

// Main component
const TrafficAnimations = () => {
  // Traffic light with changing lights
  const TrafficLightWithLogic = ({ top, left, delay }) => {
    const [activeLight, setActiveLight] = React.useState('red');
    
    React.useEffect(() => {
      const interval = setInterval(() => {
        setActiveLight(current => {
          switch(current) {
            case 'red': return 'green';
            case 'green': return 'yellow';
            case 'yellow': return 'red';
            default: return 'red';
          }
        });
      }, 3000);
      
      return () => clearInterval(interval);
    }, []);
    
    return (
      <TrafficLightBalloon top={top} left={left} delay={delay}>
        <TrafficBalloonLight color="red" active={activeLight === 'red'} />
        <TrafficBalloonLight color="yellow" active={activeLight === 'yellow'} />
        <TrafficBalloonLight color="green" active={activeLight === 'green'} />
      </TrafficLightBalloon>
    );
  };

  return (
    <AnimationContainer>
      <TrafficLightWithLogic top="100px" left="10%" delay="0s" />
      <TrafficLightWithLogic top="150px" left="80%" delay="1.5s" />
    </AnimationContainer>
  );
};

export default TrafficAnimations;
