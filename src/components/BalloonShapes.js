import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animation keyframes
const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(3deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

const float2 = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(-3deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

// Container for balloon shapes
const ShapesContainer = styled.div`
  position: absolute;
  z-index: 1;
  ${({ position }) => {
    switch (position) {
      case 'top-left':
        return `
          top: 80px;
          left: 50px;
        `;
      case 'top-right':
        return `
          top: 80px;
          right: 50px;
        `;
      case 'bottom-left':
        return `
          bottom: 80px;
          left: 50px;
        `;
      case 'bottom-right':
        return `
          bottom: 80px;
          right: 50px;
        `;
      case 'center-left':
        return `
          top: 50%;
          left: 50px;
          transform: translateY(-50%);
        `;
      case 'center-right':
        return `
          top: 50%;
          right: 50px;
          transform: translateY(-50%);
        `;
      default:
        return `
          top: 80px;
          right: 50px;
        `;
    }
  }}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    transform: scale(0.7);
    transform-origin: ${({ position }) => 
      position.includes('right') ? 'right' : 'left'} 
      ${({ position }) => position.includes('top') ? 'top' : position.includes('bottom') ? 'bottom' : 'center'};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    transform: scale(0.5);
  }
`;

// Base balloon segment
const BalloonSegment = styled.div`
  background-color: ${props => props.color || '#e74c3c'};
  border-radius: 50px;
  position: relative;
  filter: drop-shadow(0 3px 5px rgba(0, 0, 0, 0.2));
`;

// Balloon animal (dog)
const BalloonDog = styled.div`
  position: relative;
  width: 120px;
  height: 100px;
  margin: 20px;
  animation: ${float} 7s ease-in-out infinite;
`;

const DogHead = styled(BalloonSegment)`
  width: 40px;
  height: 30px;
  position: absolute;
  left: 0;
  top: 0;
`;

const DogEar = styled(BalloonSegment)`
  width: 20px;
  height: 25px;
  position: absolute;
  top: -15px;
  left: ${props => props.left || '5px'};
  transform: rotate(${props => props.rotate || '0deg'});
`;

const DogBody = styled(BalloonSegment)`
  width: 60px;
  height: 25px;
  position: absolute;
  left: 30px;
  top: 10px;
`;

const DogLeg = styled(BalloonSegment)`
  width: 15px;
  height: 30px;
  position: absolute;
  top: 25px;
  left: ${props => props.left || '40px'};
`;

const DogTail = styled(BalloonSegment)`
  width: 30px;
  height: 15px;
  position: absolute;
  top: 15px;
  left: 80px;
  transform: rotate(30deg);
`;

// Balloon crown
const BalloonCrown = styled.div`
  position: relative;
  width: 100px;
  height: 70px;
  margin: 20px;
  animation: ${float2} 8s ease-in-out infinite;
`;

const CrownBase = styled(BalloonSegment)`
  width: 100px;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${props => props.color || '#f39c12'};
`;

const CrownPoint = styled(BalloonSegment)`
  width: 15px;
  height: 40px;
  position: absolute;
  bottom: 15px;
  left: ${props => props.left || '10px'};
  background-color: ${props => props.color || '#f39c12'};
`;

// Balloon heart
const BalloonHeart = styled.div`
  position: relative;
  width: 80px;
  height: 70px;
  margin: 20px;
  animation: ${float} 6s ease-in-out infinite;
`;

const HeartHalf = styled(BalloonSegment)`
  width: 30px;
  height: 45px;
  position: absolute;
  top: 0;
  left: ${props => props.left || '10px'};
  transform: rotate(${props => props.rotate || '-45deg'});
  background-color: ${props => props.color || '#e74c3c'};
  border-radius: 30px 30px 0 0;
`;

const HeartBase = styled(BalloonSegment)`
  width: 50px;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 15px;
  transform: rotate(45deg);
  background-color: ${props => props.color || '#e74c3c'};
`;

// Balloon flower
const BalloonFlower = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  margin: 20px;
  animation: ${float2} 9s ease-in-out infinite;
`;

const FlowerPetal = styled(BalloonSegment)`
  width: 25px;
  height: 35px;
  position: absolute;
  top: ${props => props.top || '0'};
  left: ${props => props.left || '0'};
  transform: rotate(${props => props.rotate || '0deg'});
  background-color: ${props => props.color || '#9b59b6'};
`;

const FlowerCenter = styled(BalloonSegment)`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 30px;
  left: 30px;
  border-radius: 50%;
  background-color: ${props => props.color || '#f1c40f'};
`;

// Balloon sword
const BalloonSword = styled.div`
  position: relative;
  width: 30px;
  height: 120px;
  margin: 20px;
  animation: ${float} 7.5s ease-in-out infinite;
`;

const SwordHandle = styled(BalloonSegment)`
  width: 20px;
  height: 30px;
  position: absolute;
  bottom: 0;
  left: 5px;
  background-color: ${props => props.color || '#8e44ad'};
`;

const SwordGuard = styled(BalloonSegment)`
  width: 30px;
  height: 15px;
  position: absolute;
  bottom: 25px;
  left: 0;
  background-color: ${props => props.color || '#f39c12'};
`;

const SwordBlade = styled(BalloonSegment)`
  width: 15px;
  height: 80px;
  position: absolute;
  bottom: 35px;
  left: 7.5px;
  background-color: ${props => props.color || '#ecf0f1'};
`;

// Main component
const BalloonShapes = ({ position = 'top-right', type = 'random' }) => {
  // Helper function to get a random color
  const getRandomColor = () => {
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22'];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  // Render different balloon shapes based on type
  const renderBalloonShape = () => {
    // If random type is selected, choose a random shape
    if (type === 'random') {
      const shapes = ['dog', 'crown', 'heart', 'flower', 'sword'];
      type = shapes[Math.floor(Math.random() * shapes.length)];
    }
    
    switch (type) {
      case 'dog':
        return (
          <BalloonDog>
            <DogHead color={getRandomColor()} />
            <DogEar left="5px" rotate="-30deg" color={getRandomColor()} />
            <DogEar left="25px" rotate="30deg" color={getRandomColor()} />
            <DogBody color={getRandomColor()} />
            <DogLeg left="40px" color={getRandomColor()} />
            <DogLeg left="65px" color={getRandomColor()} />
            <DogTail color={getRandomColor()} />
          </BalloonDog>
        );
      
      case 'crown':
        const crownColor = getRandomColor();
        return (
          <BalloonCrown>
            <CrownBase color={crownColor} />
            <CrownPoint left="10px" color={crownColor} />
            <CrownPoint left="35px" color={crownColor} />
            <CrownPoint left="60px" color={crownColor} />
            <CrownPoint left="85px" color={crownColor} />
          </BalloonCrown>
        );
      
      case 'heart':
        const heartColor = getRandomColor();
        return (
          <BalloonHeart>
            <HeartHalf left="10px" rotate="-45deg" color={heartColor} />
            <HeartHalf left="40px" rotate="45deg" color={heartColor} />
            <HeartBase color={heartColor} />
          </BalloonHeart>
        );
      
      case 'flower':
        const petalColor = getRandomColor();
        return (
          <BalloonFlower>
            <FlowerPetal top="0" left="32.5px" rotate="0deg" color={petalColor} />
            <FlowerPetal top="32.5px" left="0" rotate="90deg" color={petalColor} />
            <FlowerPetal top="55px" left="32.5px" rotate="180deg" color={petalColor} />
            <FlowerPetal top="32.5px" left="65px" rotate="270deg" color={petalColor} />
            <FlowerCenter color={getRandomColor()} />
          </BalloonFlower>
        );
      
      case 'sword':
        return (
          <BalloonSword>
            <SwordHandle color={getRandomColor()} />
            <SwordGuard color={getRandomColor()} />
            <SwordBlade color="#ecf0f1" />
          </BalloonSword>
        );
      
      default:
        return (
          <BalloonDog>
            <DogHead color={getRandomColor()} />
            <DogEar left="5px" rotate="-30deg" color={getRandomColor()} />
            <DogEar left="25px" rotate="30deg" color={getRandomColor()} />
            <DogBody color={getRandomColor()} />
            <DogLeg left="40px" color={getRandomColor()} />
            <DogLeg left="65px" color={getRandomColor()} />
            <DogTail color={getRandomColor()} />
          </BalloonDog>
        );
    }
  };
  
  return (
    <ShapesContainer position={position}>
      {renderBalloonShape()}
    </ShapesContainer>
  );
};

export default BalloonShapes;
