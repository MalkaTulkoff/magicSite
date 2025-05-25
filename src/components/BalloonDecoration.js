import React from 'react';
import styled from 'styled-components';
import BalloonShapes from './BalloonShapes';

const BalloonDecorationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

// This component places multiple balloon shapes around the page
const BalloonDecoration = ({ count = 5 }) => {
  // Define possible positions for balloon shapes
  const positions = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'center-left',
    'center-right'
  ];
  
  // Define possible balloon shapes
  const shapes = ['dog', 'crown', 'heart', 'flower', 'sword'];
  
  // Generate random balloon shapes
  const renderBalloonShapes = () => {
    const balloons = [];
    
    // Ensure we don't try to use more positions than available
    const balloonCount = Math.min(count, positions.length);
    
    // Create a shuffled array of positions to use
    const shuffledPositions = [...positions].sort(() => 0.5 - Math.random());
    
    for (let i = 0; i < balloonCount; i++) {
      // Get a random shape
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      
      // Use a position from our shuffled array
      const position = shuffledPositions[i];
      
      balloons.push(
        <BalloonShapes 
          key={`balloon-${i}`} 
          position={position} 
          type={shape} 
        />
      );
    }
    
    return balloons;
  };

  return (
    <BalloonDecorationContainer>
      {renderBalloonShapes()}
    </BalloonDecorationContainer>
  );
};

export default BalloonDecoration;
