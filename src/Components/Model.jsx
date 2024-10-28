import React from "react";
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { selectModelBool, setBoolean } from "../Slices/Bool/boolSlice";

import { Description, InsertDriveFile } from "@mui/icons-material";
import CreateNewFolderOutlinedIcon from "@mui/icons-material/CreateNewFolderOutlined";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function Model() {
  const selectModel = useSelector(selectModelBool);
  const dispatch = useDispatch();
  return (
    <MenuContainer bool={selectModel}>
      <MenuItem onClick={() => dispatch(setBoolean({ folderBool: true }))}>
        <CreateNewFolderOutlinedIcon className="icon" />
        <span>New folder</span>
        <Shortcut>Alt+C then F</Shortcut>
      </MenuItem>
      <MenuItem onClick={() => dispatch(setBoolean({ photo: true }))}>
        <UploadFileOutlinedIcon className="icon" />
        <span>File upload</span>
        <Shortcut>Alt+C then U</Shortcut>
      </MenuItem>
      <MenuItemDisabled>
        <DriveFolderUploadOutlinedIcon className="icon" />
        <span>Folder upload</span>
        <Shortcut>Alt+C then I</Shortcut>
      </MenuItemDisabled>
      <Divider />
      <MenuItemDisabled>
        <Description className="iconDocs" />
        <span>Google Docs</span>
      </MenuItemDisabled>
      <MenuItemDisabled>
        <InsertDriveFile className="iconSheets" />
        <span>Google Sheets</span>
      </MenuItemDisabled>
      <MenuItemDisabled>
        <ViewDayOutlinedIcon className="iconSlides" />
        <span>Google Slides</span>
      </MenuItemDisabled>
      <MenuItemDisabled>
        <ListAltOutlinedIcon className="iconForms" />
        <span>Google Forms</span>
      </MenuItemDisabled>
      <MenuItem>
        <span>More</span>
      </MenuItem>
    </MenuContainer>
  );
}

export default Model;

const MenuContainer = styled.div`
  position: fixed;
  top: 100px;
  left: 20px;
  width: 250px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
  padding: 8px 0;
  transition: all 200ms ease-out;
  transform: ${(props) =>
    props.bool ? `translatey(-0%)` : `translatey(-200%)`};
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: pointer;
  font-size: 14px;
  color: #202124;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f1f3f4;
  }

  .icon {
    margin-right: 10px;
    color: #5f6368;
  }
`;

const MenuItemDisabled = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  cursor: not-allowed;
  font-size: 14px;
  color: #202124;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f1f3f4;
  }

  .icon {
    margin-right: 10px;
    color: #5f6368;
  }

  .iconDocs {
    margin-right: 10px;
    color: #2860bd;
  }
  .iconSheets {
    margin-right: 10px;
    color: #34a853;
  }
  .iconSlides {
    margin-right: 10px;
    color: #fabd04;
  }
  .iconForms {
    margin-right: 10px;
    color: #61259f;
  }
`;

const Shortcut = styled.span`
  margin-left: auto;
  color: #5f6368;
  font-size: 12px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin: 8px 0;
`;
