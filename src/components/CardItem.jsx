"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Card = styled(motion.div)`
  min-width: 320px;
  padding: 16px;
  border-radius: 8px;
  background-color: #222;
  border: 1px solid #444;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;

const Typography = styled.p`
  margin: 4px 0;
  font-size: ${(props) => props.size || "14px"};
  font-weight: ${(props) => (props.bold === "true" ? "bold" : "normal")};
  color: ${(props) => props.color || "#fff"};
`;

const IconButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

// Modal Styles
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalContent = styled.div`
  background: #333;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  color: white;
  overflow-y: auto;
  text-align: center;
`;

const ModalCloseButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export default function CardItem({
  title,
  description,
  price,
  imageUrl,
  demo,
}) {
  const [showModal, setShowModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleImageModalToggle = () => {
    setShowImageModal(!showImageModal);
  };

  // Close modal when clicked outside
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setShowImageModal(false);
      setShowModal(false);
    }
  };

  return (
    <Card>
      <ImageContainer onClick={handleImageModalToggle}>
        <img
          src={
            imageUrl?.src ||
            "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          }
          alt={title}
        />
      </ImageContainer>

      <div>
        <Typography size="lg" bold="true">
          {title}
        </Typography>
        <Typography>
          {description.length > 200 ? (
            <>
              {description.slice(0, 200)}...
              <span
                style={{ color: "#00f", cursor: "pointer" }}
                onClick={handleModalToggle}
              >
                عرض المزيد
              </span>
            </>
          ) : (
            description
          )}
        </Typography>
        <IconButton>⭐</IconButton>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <div>
          <Typography size="sm" color="#bbb">
            Total price:
          </Typography>
          <Typography size="lg" bold="true">
            {price}
          </Typography>
        </div>
        <a target="_blank" href={demo}>
          Demo ➡
        </a>
      </div>

      {/* Modal for Description */}
      {showModal && (
        <Modal onClick={closeModal}>
          <ModalContent>
            <ModalCloseButton onClick={handleModalToggle}>✖</ModalCloseButton>
            <Typography size="lg" bold="true">
              {title}
            </Typography>
            <Typography>{description}</Typography>
            <a target="_blank" href={demo}>
              Demo ➡
            </a>
          </ModalContent>
        </Modal>
      )}

      {/* Modal for Image */}
      {showImageModal && (
        <Modal onClick={closeModal}>
          <ModalContent>
            <ModalCloseButton onClick={handleImageModalToggle}>
              ✖
            </ModalCloseButton>
            <img
              src={
                imageUrl?.src ||
                "https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
              }
              alt={title}
              style={{
                width: "100%",
                maxHeight: "80vh",
                objectFit: "contain",
              }}
            />
          </ModalContent>
        </Modal>
      )}
    </Card>
  );
}
