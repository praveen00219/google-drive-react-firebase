import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import Drive from "./Components/Drive";
import Model from "./Components/Model";
import FolderModel from "./Components/FolderModel";
import Folder from "./Components/Folder";
import PhotoModel from "./Components/PhotoModel";
import PhotoDisplay from "./Components/photoDisplay";
import { useSelector, useDispatch } from "react-redux";
import { selectUid, setLogIn, setLogOut } from "./Slices/user/userSlice";
import Login from "./Components/Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import StarredFiles from "./Components/StarredFiles";
import Bin from "./Components/Bin";
import Recent from "./Components/Recent";
import PageNotFound from "./Components/PageNotFound";
import GoogleOnePlans from "./Components/GoogleOnePlans";
import DriveNotLogged from "./Components/DriveNotLogged";

function App() {
  const user = useSelector(selectUid);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // dispatch(setLogIn({ uid: user.uid, photo: user.photoURL }));
      } else {
        dispatch(setLogOut({ uid: null, photo: null }));
      }
    });
  });

  return (
    <Router>
      <Header user={user} />
      {user ? (
        <>
          <Container>
            <SideBar />
            <Routes>
              <Route path="/" element={<Drive />} />
              <Route path="/my-drive" element={<Drive />} />
              <Route path="/folder/:name/:id" element={<Folder />} />
              <Route path="/starred" element={<StarredFiles />} />
              <Route path="/recent" element={<Recent />} />
              <Route path="/bin" element={<Bin />} />
              <Route path="/storage" element={<GoogleOnePlans />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Container>
          <Model />
          <PhotoModel />
          <FolderModel />
          <PhotoDisplay />
        </>
      ) : (
        <Routes>
          <Route path="/driveNotLogged" element={<DriveNotLogged />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        // <Login />
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
`;
