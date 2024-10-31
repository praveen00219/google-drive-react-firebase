import React, { useState } from "react";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { auth, provider } from "../firebase/firebase";
import { setLogIn } from "../Slices/user/userSlice";
import logo from "../assets/google-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false); // State for confirmation modal
  const navigate = useNavigate();

  const LoginwithGoogle = async () => {
    await signInWithPopup(auth, provider).then((res) => {
      let user = res.user;
      dispatch(setLogIn({ uid: user.uid, photo: user.photoURL }));
      setShowConfirm(false); // Close modal on successful sign-in
      navigate("/home");
    });
  };

  const toggleForm = () => {
    setIsCreatingAccount((prev) => !prev);
  };

  const handleGoogleSignIn = () => {
    setShowConfirm(true); // Show confirmation modal
  };

  const handleCancel = () => {
    setShowConfirm(false); // Close confirmation modal
  };

  return (
    <>
      <div className="h-[80vh] flex flex-col  justify-center items-center">
        <div className="w-full max-w-sm bg-gray-50 rounded-lg shadow-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <button className="text-gray-500 text-xl">Aa</button>
          </div>
          <div className="flex justify-center flex-col items-center mb-6">
            <img src={logo} alt="Google" className="h-24 " />
            <h1 className="text-xl text-gray-700">Google Drive</h1>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-2">
            {isCreatingAccount ? "Create Account" : "Sign in"}
          </h2>
          <p className="text-gray-600 text-center text-sm mb-6">
            {isCreatingAccount
              ? "Create your Google Account."
              : "Sign in with your Google Account. You’ll also sign in to Google services in your apps & Safari."}
          </p>
          <input
            type="email"
            placeholder={
              isCreatingAccount
                ? "Enter your email"
                : "username@uscstudents.org"
            }
            className="w-full px-4 py-3 border rounded-md mb-4 font-medium bg-gray-100 text-black"
          />
          {isCreatingAccount && (
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border rounded-md mb-4 font-medium bg-gray-100 text-black"
            />
          )}
          <div className="flex justify-between items-center text-sm mb-6">
            {!isCreatingAccount && (
              <a href="#" className="text-blue-500 hover:underline">
                Forgot email?
              </a>
            )}
            <button
              onClick={toggleForm}
              className="text-blue-500 hover:underline"
            >
              {isCreatingAccount ? "Sign-In instead" : "Create account"}
            </button>
          </div>
          {isCreatingAccount ? (
            <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600">
              Create Account
            </button>
          ) : (
            <button
              onClick={handleGoogleSignIn} // Show confirmation on click
              className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600"
            >
              Sign In with Google
            </button>
          )}
        </div>
        <span className="mt-24">
          <Link to="/drive">
            <KeyboardBackspaceOutlinedIcon className="text-blue-500" />
            <button className="text-md text-blue-500 px-1 py-1 rounded-md bg-gray-50 hover:text-blue-600">
              Back
            </button>
          </Link>
        </span>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center max-w-sm">
            <h3 className="text-lg font-semibold mb-4">
              "Drive" Wants to Use "google.com" to Sign In
            </h3>
            <p className="text-gray-700 mb-6">
              This allows the app and website to share information about you.
            </p>
            <div className="flex gap-10 justify-end">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={LoginwithGoogle}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  font-weight: 600;
  padding: 15px 20px;
  border: none;
  cursor: pointer;
  border-radius: 15px;
  transition: all 200ms ease-out;
  :hover {
    transform: scale(1.09);
  }
`;
