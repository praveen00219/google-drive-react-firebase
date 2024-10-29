import { createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";

const initialState = {
  photo: null,
  title: null,
  // fileType: null,
};

const photoSlice = createSlice({
  name: "photos",
  initialState,
  reducers: {
    setPhotoDisplay: (state, action) => {
      state.title = action.payload.title;
      state.photo = action.payload.photo;
      // state.fileType = action.payload.fileType;
    },
  },
});

export const { setPhotoDisplay } = photoSlice.actions;

export const selectPhotoDisplay = (state) => state.photos.photo;
export const selectTitleDisplay = (state) => state.photos.title;

export default photoSlice.reducer;
