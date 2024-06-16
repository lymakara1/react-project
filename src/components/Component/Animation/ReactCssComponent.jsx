import styled, { keyframes } from 'styled-components';
import { Shared } from '../../Shared';
import { useContext } from 'react';

// Define keyframes for animations
const wobbleAnimation = keyframes`
  from, to {
    transform: rotate3d(1, 1, 1, 30deg);
  }
  25% {
    transform: rotate3d(-1, 1, -1, 30deg);
  }
  50% {
    transform: rotate3d(-1, -1, 1, 30deg);
  }
  75% {
    transform: rotate3d(1, -1, -1, 30deg);
  }
`;

const colorAnimation = keyframes`
  from, to {
    text-shadow: 0 0 45px rgba(255, 0, 0, 0.5);
  }
  25% {
    text-shadow: 0 0 45px rgba(255, 255, 0, 0.5);
  }
  50% {
    text-shadow: 0 0 45px rgba(0, 255, 0, 0.5);
  }
  75% {
    text-shadow: 0 0 45px rgba(255, 0, 255, 0.5);
  }
`;

// Define styled components
const TextWarp = styled.div`
  width: 500px;
  margin: 0 auto;
  perspective: 1200px;
`;

const Text = styled.div`
  transform-style: preserve-3d;
  position: relative;
  transform-origin: center center;
  animation: ${wobbleAnimation} 5s ease-in-out infinite;
`;

const TextH1 = styled.h1`
  font-size: 50px;
  font-family: "helvetica neue";
  position: absolute;
  top: 300px;
  color: #fff;
  animation: ${colorAnimation} 10s ease-in-out infinite;

  &:nth-child(2) {
    transform: translateZ(5px);
  }
  &:nth-child(3) {
    transform: translateZ(10px);
  }
  &:nth-child(4) {
    transform: translateZ(15px);
  }
  &:nth-child(5) {
    transform: translateZ(20px);
  }
  &:nth-child(6) {
    transform: translateZ(25px);
  }
  &:nth-child(7) {
    transform: translateZ(30px);
  }
  &:nth-child(8) {
    transform: translateZ(35px);
  }
  &:nth-child(9) {
    transform: translateZ(40px);
  }
`;

const ReactCssComponent = () => {
  const {Text } = useContext(Shared)

  return (
    <div style={{
      height:150,
      position:'relative',
      top:-260,
    }}>
      <TextWarp>
        <Text>
          {[...Array(9)].map((_, i) => (
            <TextH1 key={i}>{Text}</TextH1>
          ))}
        </Text>
      </TextWarp>
    </div>
  );
};

export default ReactCssComponent;
