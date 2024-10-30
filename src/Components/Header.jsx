import React, { useState } from "react";
import styled from "styled-components";
import {
  Search,
  Tune,
  CheckCircleOutline,
  HelpOutline,
  Settings,
  Apps,
  ExitToApp,
  AccountCircle,
} from "@mui/icons-material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Avatar, Popover, Typography, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  selectPhoto,
  selectUid,
  setLogIn,
  setLogOut,
} from "../Slices/user/userSlice";

import logo from "../assets/google-logo.png";

function Header() {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const photo = useSelector(selectPhoto);
  const userUid = useSelector(selectUid); // Changed the name to avoid confusion
  console.log("uID : ", userUid); // output : null -> when user not login

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    dispatch(setLogOut({ uid: null, photo: null }));
    setAnchorEl(null);
    navigate("/login");
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <HeaderContainer>
      <>
        <Link to="/drive">
          <LogoContainer>
            <img src={logo} alt="Drive Logo" />
            <span>Drive</span>
          </LogoContainer>
        </Link>
      </>

      {userUid ? ( // Conditional rendering based on userUid
        <>
          <SearchBarContainer>
            <Search className="icon" />
            <input type="text" placeholder="Search in Drive" />
            <Tune className="icon" />
          </SearchBarContainer>

          <IconsContainer>
            <CheckCircleOutline className="icon" />
            <HelpOutline className="icon" />
            <Settings className="icon" />
            <Apps className="icon" />
            <div>
              <IconButton onClick={handleAvatarClick}>
                <img
                  src={photo}
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </IconButton>
              <ExpandMoreOutlinedIcon
                onClick={handleAvatarClick}
                className="-ml-2"
              />
            </div>
          </IconsContainer>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <PopoverContent>
              <MenuItem onClick={() => alert("Account Settings")}>
                <AccountCircle fontSize="small" /> Account Settings
              </MenuItem>
              <MenuItem onClick={handleLogOut}>
                <ExitToApp fontSize="small" /> Logout
              </MenuItem>
            </PopoverContent>
          </Popover>
        </>
      ) : (
        <ul className="flex gap-10 text-gray-600 mx-10">
          <li className="hover:text-blue-500 cursor-pointer">Individuals</li>
          <li className="hover:text-blue-500 cursor-pointer">Teams</li>
          <li className="hover:text-blue-500 cursor-pointer">Enterprise</li>
        </ul>
      )}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ userUid }) => (userUid ? "space-between" : "initial")};
  padding: 2px 16px;
  height: 60px;
  font-family: Arial, sans-serif;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;

  img {
    height: 40px;
    margin-right: 8px;
  }

  span {
    font-size: 22px;
    font-weight: 500;
    color: #202124;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 680px;
  height: 40px;
  background-color: #e9edf6;
  border-radius: 40px;
  padding: 3px 12px;
  margin: 0 16px;

  .icon {
    color: #44464a;
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    background: none;
    margin: 0 8px;
    font-size: 14px;
    color: #202124;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  .icon {
    color: #44464a;
    margin: 0 10px;
    cursor: pointer;
  }
`;

// const UserAvatar = styled.img`
//   height: 32px;
//   width: 32px;
//   border-radius: 50%;
//   cursor: pointer;
// `;

const PopoverContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  color: #44464a;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    margin-right: 8px;
  }
`;
