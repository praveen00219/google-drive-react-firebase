import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { InsertPhoto } from "@mui/icons-material";
import ZoomOutMapOutlinedIcon from "@mui/icons-material/ZoomOutMapOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";

import { useDispatch, useSelector } from "react-redux";
import {
  setPhotoDisplay,
  moveToBin,
  selectBinItems,
} from "../Slices/photodisplay/photoSlice";

function FileList({ img, title }) {
  const dispatch = useDispatch();
  const [showTooltip, setShowTooltip] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();
  const favRef = useRef();

  const binItems = useSelector(selectBinItems); // Select bin items

  const imgData = {
    img: img,
    title: title,
  };

  // const imgId = useSelector(photosle);

  const PhotoSelector = () => {
    dispatch(setPhotoDisplay({ photo: img, title }));
  };

  const openMenu = () => {
    setShowMenu(true);
  };

  const handleFavorite = () => {
    console.log("AddToFav path clicked");
    setShowMenu(false);
  };

  const handleDownload = () => {
    console.log("Download path clicked");
    setShowMenu(false);
  };

  const handleRename = () => {
    console.log("Rename path clicked");
    setShowMenu(false);
  };

  const handleShare = () => {
    console.log("Share path clicked");
    setShowMenu(false);
  };

  const handleMoveToBin = () => {
    dispatch(moveToBin(imgData));
    setShowMenu(false);
  };

  // Check if the image is in the bin
  const isInBin = binItems.some((item) => item.img === img);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {!isInBin && (
        <CardContainer onClick={PhotoSelector}>
          <ImageContainer>
            <img src={img} alt={title} />
          </ImageContainer>
          <FileInfo>
            <FileTitle>
              <InsertPhoto className="iconPhoto" />
              {title}
            </FileTitle>
            <Actions>
              <StarBorderOutlinedIcon
                className="fav"
                style={{ fontSize: "18px" }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFavorite();
                }}
                ref={favRef}
              />
              <MoreIcon
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTooltip(false);
                  openMenu();
                }}
                ref={menuRef}
              >
                <MoreVertIcon style={{ fontSize: "20px", color: "#5f6368" }} />
                {showTooltip && <Tooltip>More Actions</Tooltip>}
                {showMenu && (
                  <Menu>
                    <MenuItem onClick={PhotoSelector}>
                      <ZoomOutMapOutlinedIcon className="icon" />
                      Open with
                    </MenuItem>
                    <MenuItem onClick={handleDownload}>
                      <FileDownloadOutlinedIcon className="icon" />
                      Download
                    </MenuItem>
                    <MenuItem onClick={handleRename}>
                      <DriveFileRenameOutlineOutlinedIcon className="icon" />
                      Rename
                    </MenuItem>
                    <MenuItem onClick={handleShare}>
                      <ShareOutlinedIcon className="icon" />
                      Share
                    </MenuItem>

                    <MenuItem onClick={handleMoveToBin}>
                      <DeleteOutlinedIcon className="icon" />
                      Move to bin
                    </MenuItem>
                  </Menu>
                )}
              </MoreIcon>
            </Actions>
          </FileInfo>
        </CardContainer>
      )}
    </>
  );
}

export default FileList;

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
