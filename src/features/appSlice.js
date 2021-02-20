import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";
export const appSlice = createSlice({
  name: "app",
  initialState: {
    newColor: {
      first: "#000000",
      second: "#ffffff",
      id: uniqid(),
    },
    colorList: [
      {
        first: "#905431",
        second: "#abc",
        id: uniqid(),
      },
      {
        first: "#000000",
        second: "#ffffff",
        id: uniqid(),
      },
    ],
    addColorDisable: false,
  },
  reducers: {
    onFirstColorChange: (state, action) => {
      state.newColor.first = action.payload;
    },
    onSecondColorChange: (state, action) => {
      state.newColor.second = action.payload;
    },
    addColorToList: (state, action) => {
      state.colorList = [...state.colorList, action.payload];
    },
    deleteColor: (state, action) => {
      console.log("ya tut");
      state.colorList = state.colorList.filter((item) =>
        item.id != action.payload ? true : false
      );
    },
    editColor: (state, action) => {
      state.colorList = state.colorList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    disableBtnToogler: (state, action) => {
      state.addColorDisable = action.payload;
    },
  },
});

export const {
  onFirstColorChange,
  onSecondColorChange,
  addColorToList,
  deleteColor,
  editColor,
  disableBtnToogler,
} = appSlice.actions;
export const getNewColor = (state) => state.app.newColor;
export const getColorList = (state) => state.app.colorList;
export const getDisableBtn = (state) => state.app.addColorDisable;
export const isValid = (val) =>
  /^#[0-9A-F]{3}$/i.test(val) || /^#[0-9A-F]{6}$/i.test(val) ? true : false;
export default appSlice.reducer;
