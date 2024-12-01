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
import { selectPhoto, selectUid, setLogOut } from "../Slices/user/userSlice";
import { auth } from "../firebase/firebase"; // Import Firebase auth
import logo from "../assets/google-logo.png";

import ImageSliderModal from "./ImageSliderModal"; // Import modal component

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isHelpModalOpen, setHelpModalOpen] = useState(false);

  const photo = useSelector(selectPhoto);
  const userUid = useSelector(selectUid);

  const togglePopover = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleLogOut = async () => {
    try {
      await auth.signOut(); // Sign out from Firebase
      dispatch(setLogOut({ uid: null, photo: null })); // Clear Redux state
      setAnchorEl(null);
      navigate("/login"); // Redirect to login
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Failed to log out. Please try again.");
    }
  };

  const handleHelperModal = () => setHelpModalOpen(true);
  const closeHelperModal = () => setHelpModalOpen(false);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <HeaderContainer>
      <Link to="/home">
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
            <HelpOutline className="helpIcon" onClick={handleHelperModal} />
            <Apps className="icon" />
            <div className="flex items-center gap-2">
              <div
                aria-controls={open ? "simple-popover" : undefined}
                aria-haspopup="true"
                onClick={togglePopover}
              >
                <img
                  src={
                    photo ||
                    "https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
                  }
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              </div>
              <ExpandMoreOutlinedIcon
                onClick={togglePopover}
                className="-ml-2"
              />
            </div>
          </IconsContainer>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
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

      {/* Image Slider Modal for Helper */}
      <ImageSliderModal
        images={[]}
        open={isHelpModalOpen}
        onClose={closeHelperModal}
      />
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 2px 16px;
  height: 60px;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 8px;
  }
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
  margin-right: auto;
  gap: 10px;
  text-align: center;
  color: #5f6368;
  @media (max-width: 768px) {
    display: none;
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
