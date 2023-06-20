import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest } from "../../../api";
import { endpoints, requestPoints } from "../../storeEnums";

const initialState = {
  loading: true,
  categoires: {},
};

export const getCategoryData = createAsyncThunk(
  requestPoints.GET_ALL_CATEGORIES_POINT,
  async () => {
    const result = await getRequest(
      endpoints.GET_ALL_CATEGORIES_ENDPOINT
    );
    return result.data;
  }
);


const categoryReducer = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryData.fulfilled, (state, action) => {
      state.categoires = action.payload;
      state.loading = false;
    });
  },
});

export default categoryReducer.reducer;
