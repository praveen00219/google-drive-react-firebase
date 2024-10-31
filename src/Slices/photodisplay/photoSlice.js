import { createSlice } from "@reduxjs/toolkit";

// Add a new state property for file list
const initialState = {
  photo: null,
  title: null,
  bin: [], // Tracks deleted images
  favorites: [], // Tracks starred images
  fileList: [], // Tracks all available images
};

// Add a new action to restore an image from bin to fileList
const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    // Add a new photo
    setPhotoDisplay: (state, action) => {
      state.title = action.payload.title;
      state.photo = action.payload.photo;
    },

    moveToBin: (state, action) => {
      state.bin.push(action.payload);
      if (state.photo === action.payload.photo) {
        state.photo = null;
        state.title = null;
      }
    },

    // New action to restore an image from bin to fileList
    restoreToDrive: (state, action) => {
      const restoredImage = action.payload;
      // Remove the image from the bin
      state.bin = state.bin.filter(
        (item) => item.photo !== restoredImage.photo
      );
      // Add it back to the fileList
      state.fileList.push(restoredImage);
    },

    // Add a new photo to favorites
    toggleFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (item) => item.photo === action.payload.photo
      );

      if (index >= 0) {
        // Remove from favorites
        return {
          ...state,
          favorites: state.favorites.filter((_, idx) => idx !== index),
        };
      } else {
        // Add to favorites
        return {
          ...state,
          favorites: [...state.favorites, action.payload],
        };
      }
    },
  },
});

// Export the new action
export const { setPhotoDisplay, moveToBin, toggleFavorite, restoreToDrive } =
  photoSlice.actions;

// Selectors
export const selectPhotoDisplay = (state) => state.photos.photo;
export const selectTitleDisplay = (state) => state.photos.title;
export const selectBinItems = (state) => state.photos.bin;
export const selectFavoriteItems = (state) => state.photos.favorites;
export const selectFileList = (state) => state.photos.fileList; // Selector for file list

export default photoSlice.reducer;
