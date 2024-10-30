import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import db from "../firebase/firebase";
import { selectFolderBool, setBoolean } from "../Slices/Bool/boolSlice";
import { selectUid } from "../Slices/user/userSlice";

function FolderModel() {
  const folderBool = useSelector(selectFolderBool);
  const dispatch = useDispatch();
  const uid = useSelector(selectUid);
  const [folderNames, setFolderNames] = useState("");
  const [loading, setLoading] = useState(false);

  const closeModal = () => {
    dispatch(setBoolean({ folderBool: false }));
    setFolderNames("");
  };

  const Submit = async (e) => {
    e.preventDefault();
    if (loading || folderNames.length < 1) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "folder"), {
        name: folderNames,
        timestamp: serverTimestamp(),
        uid: uid,
      });
      closeModal();
    } catch (error) {
      console.error("Error creating folder:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Overlay folder={folderBool} onClick={closeModal}>
      <Container onClick={(e) => e.stopPropagation()}>
        <Title>New Folder</Title>
        <InputContainer>
          <input
            type="text"
            value={folderNames}
            onChange={(e) => setFolderNames(e.target.value)}
            placeholder="Create Folder"
            disabled={loading}
          />
        </InputContainer>
        <ButtonContainer>
          <ActionButton onClick={closeModal} disabled={loading}>
            Cancel
          </ActionButton>
          <ActionButton primary onClick={Submit} disabled={loading}>
            {loading ? "Creating..." : "Create Folder"}
          </ActionButton>
        </ButtonContainer>
      </Container>
    </Overlay>
  );
}

export default FolderModel;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 5, 0.5);
  display: ${({ folder }) => (folder ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
`;

const Container = styled.div`
  width: 300px;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: slideDown 0.3s ease;

  @keyframes slideDown {
    from {
      transform: translateY(-20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  input {
    flex: 1;
    border: none;
    padding: 8px;
    font-size: 16px;
    outline: none;

    &:disabled {
      background-color: #f0f0f0;
    }

    &:focus {
      border-bottom: 1px solid #3b82f6;
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;

const ActionButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  color: ${({ primary }) => (primary ? "#3b82f6" : "#ef4444")};
  border: none;

  &:hover {
    color: ${({ primary }) => (primary ? "#2563eb" : "#dc2626")};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ddd;
  }
`;
