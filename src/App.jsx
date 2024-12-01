import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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

  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);

  const handleSidebarToggle = (isMinimized) => {
    setIsSidebarMinimized(isMinimized);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setLogIn({ uid: user.uid, photo: user.photoURL }));
      } else {
        dispatch(setLogOut({ uid: null, photo: null }));
      }
    });
  }, [dispatch]);

  const loggedInRoutes = (
    <Container>
      <SideBar onSidebarToggle={handleSidebarToggle} />
      <Content isFiltered={!isSidebarMinimized}>
        <Routes>
          <Route path="/" element={<Drive />} />
          <Route path="/my-drive" element={<Drive />} />
          <Route path="/folder/:name/:id" element={<Folder />} />
          <Route path="/computers" element={<PageNotFound />} />
          <Route path="/shared" element={<PageNotFound />} />
          <Route path="/spam" element={<PageNotFound />} />
          <Route path="/starred" element={<StarredFiles />} />
          <Route path="/recent" element={<Drive />} />
          <Route path="/bin" element={<Bin />} />
          <Route path="/storage" element={<GoogleOnePlans />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Content>
      <Model />
      <PhotoModel />
      <FolderModel />
      <PhotoDisplay />
    </Container>
  );

  const loggedOutRoutes = (
    <Routes>
      <Route path="/" element={<Navigate to="/drive" replace />} />
      <Route path="/drive" element={<DriveNotLogged />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );

  return (
    <Router>
      {user && <Header user={user} />}
      {user ? loggedInRoutes : loggedOutRoutes}
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  max-height: 92vh;
  flex-direction: column;
  overflow-y: auto;
  scrollbar-width: none;
  transition: filter 0.3s ease;
  padding: 20px;
`;
