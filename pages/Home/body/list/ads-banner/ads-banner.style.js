import styled, { keyframes } from 'styled-components';

// Keyframe animations
const bannermove = keyframes`
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: -5746px;
  }
`;

// Ads container styling
export const AdsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* Ensure children stretch to align with each other */
  margin: 2rem 0;
  padding: 48px;
  height: auto; /* Adjust height as necessary */
  border-radius: 20px solid 0px ;
`;


// Big advertisement item styling
export const BigAdItem = styled.div`
  width: 66%;
  overflow: hidden;
  border-radius: 8px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
    width: 100%;
    transition: all 1s ease;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  }
  }
`;

// Small advertisement item styling
export const SmallAdItem = styled.div`
  width: 33%;
  img {
    width: 100%;
    height: auto; /* Maintain aspect ratio */
    border-radius: 8px;
  }
`;


// Container for centering content
export const Container = styled.div`
  width: 100%; /* Ensure it takes up the full width of its parent */
  overflow: hidden;
  margin: 0; /* Remove margin if it causes misalignment */
  background: transparent;
`;


// Photobanner styling
export const Photobanner = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 80px;
`;


export const OthersImg = styled.img`
  transition: all 1s ease;
  height: 100%;
`;
