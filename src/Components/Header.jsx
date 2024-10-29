import React from "react";
import styled from "styled-components";

import {
  Search,
  Tune,
  CheckCircleOutline,
  HelpOutline,
  Settings,
  Apps,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";

import logo from "../assets/google-logo.png";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPhoto } from "../Slices/user/userSlice";

function Header() {
  const photo = useSelector(selectPhoto);
  return (
    <HeaderContainer>
      <Link to="/">
        <LogoContainer>
          <img src={logo} alt="Drive Logo" />
          <span>Drive</span>
        </LogoContainer>
      </Link>

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
        <UserAvatar src={photo} alt="User Avatar" />
      </IconsContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 16px;
  height: 60px;
  font-family: Arial, sans-serif;

  // @media (max-width: 768px) {
  //   flex-direction: column;
  //   height: auto;
  //   padding: 8px;
  // }
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

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    img {
      height: 24px;
    }

    span {
      font-size: 16px;
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

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 8px 0;
  }

  @media (max-width: 480px) {
    input {
      font-size: 12px;
    }
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

  @media (max-width: 768px) {
    .icon {
      margin: 0 4px;
    }
  }

  @media (max-width: 480px) {
    .icon {
      margin: 0 2px;
    }
  }
`;

const UserAvatar = styled.img`
  height: 32px;
  width: 32px;
  margin-left: 5px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 480px) {
    height: 22px;
    width: 22px;
  }
`;
