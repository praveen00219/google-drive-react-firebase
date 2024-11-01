import { Folder } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setFolder } from "../Slices/channel/channelSlice";

function FileContainer({ title, id }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SelectChannel = () => {
    if (id) {
      dispatch(setFolder({ folderId: id, folderName: title }));
      navigate(`/folder/${title}/${id}`);
    }
  };
  return (
    <Container onClick={SelectChannel}>
      <Folder />
      <span>{title}</span>
    </Container>
  );
}

export default FileContainer;

const Container = styled.div`
  max-width: 287.5px;
  height: 48px;
  display: flex;
  padding-inline: 8px;
  align-items: center;
  background-color: #f0f3f8;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 10px;

  svg {
    height: 24px;
    width: 24px;
    color: rgba(95, 99, 104);
    margin-left: 4px;
  }

  span {
    font-size: 13px;
    margin-left: 10px;
    text-transform: capitalize;
  }
`;
