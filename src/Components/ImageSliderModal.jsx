// ImageSliderModal.js
import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ImageSliderModal = ({ images, open, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (!open) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <CloseIcon />
        </CloseButton>
        <ImageContainer>
          <img src={images[currentIndex]} alt="Slide" />
        </ImageContainer>
        <ButtonContainer>
          <SliderButton onClick={prevImage}>Previous</SliderButton>
          <SliderButton onClick={nextImage}>Next</SliderButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ImageSliderModal;

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CloseButton = styled(IconButton)`
  align-self: flex-end;
`;

const ImageContainer = styled.div`
  max-width: 100%;
  img {
    max-width: 100%;
    border-radius: 8px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const SliderButton = styled.button`
  padding: 8px 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #0056b3;
  }
`;
