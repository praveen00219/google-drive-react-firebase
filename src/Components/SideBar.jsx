import React from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { setBoolean } from "../Slices/Bool/boolSlice";

import { Folder, Computer, AccessTime, Report } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

function Sidebar() {
  const dispatch = useDispatch();
  return (
    <SidebarContainer>
      <NewChannel onClick={() => dispatch(setBoolean({ modelBools: true }))}>
        <span onClick={() => dispatch(setBoolean({ modelBools: true }))}>
          New
        </span>
      </NewChannel>
      <NavItem>
        <HomeOutlinedIcon className="icon" />
        <span>Home</span>
      </NavItem>
      <NavItem active>
        <Folder className="icon" />
        <span>My Drive</span>
      </NavItem>
      <NavItem>
        <Computer className="icon" />
        <span>Computers</span>
      </NavItem>
      <Divider />
      <NavItem>
        <PeopleAltOutlinedIcon className="icon" />
        <span>Shared with me</span>
      </NavItem>
      <NavItem>
        <AccessTime className="icon" />
        <span>Recent</span>
      </NavItem>
      <NavItem>
        <StarBorderOutlinedIcon className="icon" />
        <span>Starred</span>
      </NavItem>
      <Divider />
      <NavItem>
        <Report className="icon" />
        <span>Spam</span>
      </NavItem>
      <NavItem>
        <DeleteOutlinedIcon className="icon" />
        <span>Bin</span>
      </NavItem>
      <NavItem>
        <FilterDramaIcon className="icon" />
        <span>Storage</span>
      </NavItem>
      <StorageContainer>
        <ProgressBar />
        <StorageText>100 Mb of 15 GB used</StorageText>
      </StorageContainer>
      <GetStorageButton>Get more storage</GetStorageButton>
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  width: 220px;
  padding: 10px 0;
  margin-left: 20px;
  font-family: Arial, sans-serif;
`;

const NewChannel = styled.div`
  width: 118px;
  height: 48px;
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

const NavItem = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 16px;
  font-size: 14px;
  color: #202124;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#c3e7ff" : "transparent")};
  border-radius: 40px;
  transition: background-color 0.2s ease;

  .icon {
    margin-right: 10px;
    color: #474848;
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
  padding: 0 16px;
  color: #5f6368;
`;

const ProgressBar = styled.div`
  width: 85%;
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
