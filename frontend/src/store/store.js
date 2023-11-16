import { configureStore, createSlice } from "@reduxjs/toolkit";

let currentPage = createSlice({
  name: "page",
  initialState: "",
  reducers: {
    changePage(state, action) {
      return action.payload;
    },
  },
});

export let { changePage } = currentPage.actions;

export default configureStore({
  reducer: { currentPage: currentPage.reducer },
});
