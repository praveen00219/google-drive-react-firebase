import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBoolean } from "../Slices/Bool/boolSlice";
import {
  Folder,
  Computer,
  AccessTime,
  Report,
  Menu as MenuIcon,
  Close,
} from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

function Sidebar({ onSidebarToggle }) {
  const dispatch = useDispatch();
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized((prev) => !prev);
    onSidebarToggle(!isMinimized); // Notify parent of the toggle state
  };

  const usedStorage = "100 Mb";
  const totalStorage = "15 GB";

  return (
    <SidebarContainer isMinimized={isMinimized}>
      <ToggleContainer onClick={toggleSidebar} aria-label="Toggle Sidebar">
        {isMinimized ? (
          <MenuIcon className="mr-2" />
        ) : (
          <CloseIcon>
            <Close
              onClick={() => {
                dispatch(setBoolean({ photo: false }));
                setSelectedImage(null);
              }}
            />
          </CloseIcon>
        )}
      </ToggleContainer>

      <NewChannel
        onClick={() => {
          dispatch(setBoolean({ modelBools: true }));
        }}
      >
        <span></span>
        {!isMinimized && <p>New</p>}
      </NewChannel>

      <NavItem to="/" end isMinimized={isMinimized}>
        <HomeOutlinedIcon className="icon" />
        {!isMinimized && <span>Home</span>}
      </NavItem>
      <NavItem to="/my-drive" isMinimized={isMinimized}>
        <Folder className="icon" />
        {!isMinimized && <span>My Drive</span>}
      </NavItem>
      <NavItem to="/computers" isMinimized={isMinimized}>
        <Computer className="icon" />
        {!isMinimized && <span>Computers</span>}
      </NavItem>
      <Divider />
      <NavItem to="/shared" isMinimized={isMinimized}>
        <PeopleAltOutlinedIcon className="icon" />
        {!isMinimized && <span>Shared with me</span>}
      </NavItem>
      <NavItem to="/recent" isMinimized={isMinimized}>
        <AccessTime className="icon" />
        {!isMinimized && <span>Recent</span>}
      </NavItem>
      <NavItem to="/starred" isMinimized={isMinimized}>
        <StarBorderOutlinedIcon className="icon" />
        {!isMinimized && <span>Starred</span>}
      </NavItem>
      <Divider />
      <NavItem to="/spam" isMinimized={isMinimized}>
        <Report className="icon" />
        {!isMinimized && <span>Spam</span>}
      </NavItem>
      <NavItem to="/bin" isMinimized={isMinimized}>
        <DeleteOutlinedIcon className="icon" />
        {!isMinimized && <span>Bin</span>}
      </NavItem>
      <NavItem to="/storage" isMinimized={isMinimized}>
        <FilterDramaIcon className="icon" />
        {!isMinimized && <span>Storage</span>}
      </NavItem>

      <StorageContainer isMinimized={isMinimized}>
        <ProgressBar usage="20%" />
        {!isMinimized && (
          <StorageText>
            {usedStorage} of {totalStorage} used
          </StorageText>
        )}
      </StorageContainer>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  width: ${(props) => (props.isMinimized ? "60px" : "185px")};
  padding: 10px 0;
  transition: width 0.3s ease-in-out;
  background: #f4f4f4;
  max-height: 92vh;
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  gap: 0.4rem;
  font-size: 1.2rem;
  margin: 0 10px 20px 0;
`;

const CloseIcon = styled.div`
  svg {
    cursor: pointer;
    width: 1.2rem;
    height: 1.2rem;
    color: rgba(150, 0, 0, 0.9);
    :hover {
      transform: scale(1.05);
    }
    :active {
      transform: scale(1.009);
    }
  }
`;

const NewChannel = styled.div`
  max-width: 110px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 24px;
  padding: 2px;
  margin: 0 10px 20px 10px;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: all 300ms ease-out;

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    &::before {
      content: url("data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2236%22 height=%2236%22 viewBox=%220 0 36 36%22%3E%3Cpath fill=%22%2334A853%22 d=%22M16 16v14h4V20z%22/%3E%3Cpath fill=%22%234285F4%22 d=%22M30 16H20l-4 4h14z%22/%3E%3Cpath fill=%22%23FBBC05%22 d=%22M6 16v4h10l4-4z%22/%3E%3Cpath fill=%22%23EA4335%22 d=%22M20 16V6h-4v14z%22/%3E%3Cpath fill=%22none%22 d=%22M0 0h36v36H0z%22/%3E%3C/svg%3E");
      height: 36px;
      padding-right: 10px;
    }
  }
`;
const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 5px 16px;
  text-decoration: none;
  color: #202124;
  border-radius: 8px;
  margin-bottom: 10px;

  .icon {
    margin-right: ${(props) => (props.isMinimized ? "0" : "10px")};
  }

  &:hover {
    background-color: #e7e9eb;
  }

  &.active {
    background-color: #c3e7ff;
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: #d9d9d9;
  margin: 10px 0;
`;

const StorageContainer = styled.div`
  padding: 10px;
  color: #5f6368;
`;

const ProgressBar = styled.div`
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin: 10px 0;
  width: 100%;

  &::before {
    content: "";
    display: block;
    width: ${(props) => props.usage};
    height: 100%;
    background-color: #1a73e8;
    border-radius: 3px;
  }
`;

const StorageText = styled.div`
  font-size: 12px;
`;
