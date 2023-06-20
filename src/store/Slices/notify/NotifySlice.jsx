import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../api";
import { endpoints, requestPoints } from "../../storeEnums";

const initialState = {
  loading: true,
  notifications: {},
};

export const getNotificationsData = createAsyncThunk(
  requestPoints.GET_NOTIFICATIONS_POINT,
  async () => {
    const result = await getRequest(
      `${endpoints.GET_ALL_NOTIFICATIONS_ENDPOINT}`
    );
    return result.data;
  }
);

const NotificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotificationsData.fulfilled, (state, action) => {
      state.notifications = action.payload;
      state.loading = false;
    });
  },
});

export default NotificationsSlice.reducer;
