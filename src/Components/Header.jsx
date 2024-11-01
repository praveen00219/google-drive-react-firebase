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
  const userUid = useSelector(selectUid);

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
      <Link to="/drive">
        <LogoContainer>
          <img src={logo} alt="Drive Logo" />
          <span>Drive</span>
        </LogoContainer>
      </Link>

      {userUid ? (
        <>
          <SearchBarContainer>
            <Search className="icon" />
            <input type="text" placeholder="Search in Drive" />
            <Tune className="icon" />
          </SearchBarContainer>

          <IconsContainer>
            <CheckCircleOutline className="checkIcon" />
            <HelpOutline className="helpIcon" />
            {/* <Settings className="icon" /> */}
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
        <ResponsiveMenu>
          <li>Individuals</li>
          <li>Teams</li>
          <li>Enterprise</li>
        </ResponsiveMenu>
      )}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ userUid }) => (userUid ? "space-between" : "initial")};
  gap: 1rem;
  padding: 2px 16px;
  height: 60px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 8px;
  }
  // @media (max-width: 480px) {
  //   flex-direction: column;
  //   height: auto;
  // }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;

  img {
    height: 30px;
    margin-right: 8px;
  }

  span {
    font-size: 18px;
    font-weight: 500;
    color: #202124;
    @media (max-width: 480px) {
      display: none;
    }
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
    @media (max-width: 480px) {
      font-size: 12px;
    }
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;

  .helpIcon {
    color: #44464a;
    margin: 0 10px;
    cursor: pointer;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .checkIcon {
    color: #44464a;
    margin: 0 10px;
    cursor: pointer;
    @media (max-width: 630px) {
      display: none;
    }
  }

  .icon {
    color: #44464a;
    margin: 0 10px;
    cursor: pointer;
    @media (max-width: 630px) {
      display: none;
    }
  }
`;

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

const ResponsiveMenu = styled.ul`
  display: flex;
  gap: 10px;
  text-align: center;
  color: #5f6368;
  @media (max-width: 768px) {
    display: none; /* Hide when user is logged in or on smaller screens */
  }
  li {
    font-size: 14px;
    color: #44464a;
    cursor: pointer;
    &:hover {
      color: #1a73e8;
    }
  }
`;
