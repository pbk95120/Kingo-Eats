import { configureStore, createSlice } from "@reduxjs/toolkit";

const restaurant = createSlice({
  name: "restaurant",
  initialState: { selectedRestaurant: "" },
  reducers: {
    changeRestaurant(state, action) {
      state.selectedRestaurant = action.payload;
    },
  },
});

export const { changeRestaurant } = restaurant.actions;

export default configureStore({
  reducer: {
    restaurant: restaurant.reducer,
  },
});
