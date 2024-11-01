import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBoolean } from "../Slices/Bool/boolSlice";
import { Folder, Computer, AccessTime, Report } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import MenuIcon from "@mui/icons-material/Menu";

import addButton from "../assets/AddButton.webp";

function Sidebar() {
  const dispatch = useDispatch();
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleSidebar = () => {
    setIsMinimized((prev) => !prev);
  };

  return (
    <SidebarContainer isMinimized={isMinimized}>
      <ToggleContainer onClick={toggleSidebar}>
        <MenuIcon />
      </ToggleContainer>

      {/* <NewChannel
        onClick={() => dispatch(setBoolean({ modelBools: true }))}
        isMinimized={isMinimized}
      >
        <span>New</span>
      </NewChannel> */}

      <NewChannel onClick={() => dispatch(setBoolean({ modelBools: true }))}>
        <span onClick={() => dispatch(setBoolean({ modelBools: true }))}></span>
        {!isMinimized && <p>New</p>}
      </NewChannel>

      <NavItem to="/home" exact="true" isMinimized={isMinimized}>
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
        <ProgressBar />
        {!isMinimized && <StorageText>100 Mb of 15 GB used</StorageText>}
      </StorageContainer>

      {!isMinimized && <GetStorageButton>Get more storage</GetStorageButton>}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  width: ${(props) => (props.isMinimized ? "60px" : "220px")};
  padding: 10px 0;
  margin-left: 20px;
  font-family: Arial, sans-serif;
  transition: width 0.3s ease;
`;

const ToggleContainer = styled.div`
  display: flex;
  // justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
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
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 01);
  transition: all 500ms ease-out;

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
  font-size: 14px;
  color: #202124;
  cursor: pointer;
  border-radius: 40px;
  transition: background-color 0.2s ease, padding 0.3s ease;
  text-decoration: none;

  .icon {
    margin-right: ${(props) => (props.isMinimized ? "0" : "10px")};
    color: #474848;
  }

  &.active {
    background-color: #c3e7ff;
  }

  &:hover {
    background-color: #e7e9eb;
  }
`;

const Divider = styled.div`
  height: 1px;
  margin: 5px 0;
`;

const StorageContainer = styled.div`
  padding: ${(props) => (props.isMinimized ? "0 5px" : "0 16px")};
  color: #5f6368;
`;

const ProgressBar = styled.div`
  width: ${(props) => (props.isMinimized ? "40px" : "85%")};
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 3px;
  margin: 10px 0;

  &::before {
    content: "";
    display: block;
    width: 8%;
    height: 100%;
    background-color: #1a73e8;
    border-radius: 3px;
  }
`;

const StorageText = styled.div`
  font-size: 12px;
`;

const GetStorageButton = styled.button`
  display: block;
  width: calc(80% - 32px);
  margin: 13px 16px;
  padding: 8px 0;
  font-size: 14px;
  color: #1a73e8;
  background: transparent;
  border: 1px solid #1a73e8;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(26, 115, 232, 0.1);
  }
`;
