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
            <>
              <hr className="my-2" />
              <p className="text-center text-gray-600 mb-2">Or</p>
              <button
                onClick={handleGoogleSignIn} // Show confirmation on click
                className="w-full bg-blue-500 flex items-center justify-center flex-row text-white py-2 rounded-md font-semibold hover:bg-blue-600"
              >
                <p className="text-center flex">
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="1.4rem"
                    height="1.4rem"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Sign In with Google
                </p>
              </button>
            </>
          )}
        </div>
        <span className="mt-16">
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
