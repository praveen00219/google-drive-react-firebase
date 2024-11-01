# Google Drive Clone

A Google Drive Clone built with **React**, **Vite**, **Redux**, **Tailwind CSS**, **Styled Components**, **Material-ui/material-icons**, and **Firebase**. This application enables users to manage files and folders, offering features like file uploads, folder creation, deletion, and favoriting, along with a fullscreen preview option for a streamlined document management experience.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Firebase Setup](#firebase-setup)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [License](#license)

## Features

- **Google Authentication**: Log in with Google using Firebase for secure authentication.
- **File and Folder Management**:
  - Create new folders and upload files.
  - Organize uploaded files by creating and posting them within specific folders.
- **File Actions**:
  - Move files to trash (delete).
  - Star files to mark as favorites.
  - View files in fullscreen mode for detailed viewing.
- **Responsive Design**: Built with Tailwind CSS for a responsive UI across various devices.
- **Optimized Performance**: Powered by Vite for fast and optimized builds.

## Tech Stack

- **Frontend**: Vite, React, Redux
- **Styling**: Tailwind CSS, Styled Components, Material-ui/material-icons
- **Backend**: Firebase (for authentication, storage, and database management)

## Live Demo

Click here : [HERE](https://praveen-google-drive-react.netlify.app/)

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Firebase account and project setup

### Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/), create a new project, and set up Firebase Authentication.
2. Enable **Google Sign-In** for authentication.
3. Create a Firebase storage bucket for storing uploaded files.
4. Obtain Firebase configuration details by navigating to **Project Settings** > **General** and copying the Firebase SDK configuration.

Add this configuration to your project by creating a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID

```

git clone https://github.com/praveen00219/google-drive-react-firebase.git

cd google-drive
npm install
npm run dev

## license

This project is licensed under the MIT License.
