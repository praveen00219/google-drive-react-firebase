import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { InsertPhoto } from "@mui/icons-material";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import { selectBinItems } from "../Slices/photodisplay/photoSlice";

function Bin() {
  const binItems = useSelector(selectBinItems);
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState(null); // New state for selected item
  const [menuOpenIndex, setMenuOpenIndex] = useState(null); // State to track which menu is open

  // Function to open image in modal
  const openImageModal = (img, title) => {
    setSelectedItem({ img, title });
  };

  const handleRestoreToDrive = () => {
    // Logic to restore item
  };

  // Close menu when clicking outside
  const menuRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex-1">
      <GridContainer>
        {binItems.length > 0 ? (
          binItems.map((item, index) => (
            <CardContainer
              key={index}
              onClick={() => openImageModal(item.img, item.title)}
            >
              <ImageContainer>
                <img src={item.img} alt={item.title} />
              </ImageContainer>
              <FileInfo>
                <FileTitle>
                  <InsertPhoto className="iconPhoto" />
                  {item.title}
                </FileTitle>
                <Actions>
                  <MoreIcon
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpenIndex(menuOpenIndex === index ? null : index);
                    }}
                    ref={menuRef}
                  >
                    <MoreVertIcon
                      style={{ fontSize: "20px", color: "#5f6368" }}
                    />
                    {menuOpenIndex === index && (
                      <Menu>
                        <MenuItem
                          onClick={() => openImageModal(item.img, item.title)}
                        >
                          <ZoomOutMapOutlinedIcon className="icon" />
                          Open with
                        </MenuItem>
                        <MenuItem onClick={handleRestoreToDrive}>
                          <DeleteOutlinedIcon className="icon" />
                          Restore to Drive
                        </MenuItem>
                      </Menu>
                    )}
                  </MoreIcon>
                </Actions>
              </FileInfo>
            </CardContainer>
          ))
        ) : (
          <div className="text-center w-[75vw] h-[75vh] flex items-center justify-center">
            <div className="flex flex-col items-center">
              <p className="text-gray-600 text-sm font-semibold">
                No items in the Bin !
              </p>
            </div>
          </div>
        )}
      </GridContainer>

      {/* Modal for viewing selected image */}
      {selectedItem && (
        <ModalOverlay onClick={() => setSelectedItem(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedItem(null)}>×</CloseButton>
            <img src={selectedItem.img} alt={selectedItem.title} />
            <div className="flex items-center justify-start w-[80%] px-3 py-1 bg-gray-200 gap-2">
              <InsertPhoto className="iconPhoto" />
              <p>{selectedItem.title}</p>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}

export default Bin;
// Styled Components

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin: 20px 0;
`;

// Additional styles for modal and overlay

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 60%;
  max-height: 60%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    max-width: 80%;
    max-height: 50vh;
  }

  .iconPhoto {
    color: #4285f4;
    margin-right: 4px;
  }
`;

const CloseButton = styled.div`
  align-self: flex-end;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const CardContainer = styled.div`
  width: 300px;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin: 10px;
  cursor: pointer;
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-1px);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 80%;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const FileInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  position: relative;
`;

const FileTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #202124;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .iconPhoto {
    color: #4285f4;
    margin-right: 4px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 2px;
  color: #717577;

  .fav {
    border-radius: 18px;

    &:hover {
      background-color: #f1f3f4;
    }
  }
`;

const MoreIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    color: #5f6368;
    font-size: 20px;
  }

  &:hover {
    background-color: rgba(95, 99, 104, 0.1);
    border-radius: 50%;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  top: -30px;
  right: -5px;
  background-color: #333;
  color: #fff;
  padding: 5px 8px;
  font-size: 12px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 0.9;
  z-index: 10;
  transition: opacity 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    right: 10px;
    border-width: 5px;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const Menu = styled.div`
  position: absolute;
  bottom: 25px;
  right: 0;
  width: 180px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  z-index: 10;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  font-size: 14px;
  color: #320;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f3f4;
  }

  .icon {
    font-size: 18px;
    margin-right: 5px;
  }
`;
