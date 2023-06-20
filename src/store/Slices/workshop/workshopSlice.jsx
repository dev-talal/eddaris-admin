import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../../api";
import { endpoints, requestPoints } from "../../storeEnums";

const initialState = {
  loading: true,
  workshop_dashboard: {},
  workshop: null,
};

export const getWorkShopsData = createAsyncThunk(
  requestPoints.GET_ALL_WORKSHOPS_POINT,
  async ({ page, limit }) => {
    const result = await postRequest(
      { limit, page },
      endpoints.GET_ALL_WORKSHOPS_ENDPOINT
    );
    return result.data;
  }
);

// export const getWorkShopDetailsData = createAsyncThunk(
//   requestPoints.GET_ALL_WORKSHOPS_POINT,
//   async ({ id }) => {
//     const result = await getRequest(
//       `${endpoints.GET_ALL_WORKSHOPS_ENDPOINT}/${id}`
//     );
//     return result.data;
//   }
// );

const todoReducer = createSlice({
  name: "workshop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWorkShopsData.fulfilled, (state, action) => {
      state.workshop_dashboard = action.payload;
      state.loading = false;
    });

    // builder.addCase(getWorkShopDetailsData.fulfilled, (state, action) => {
    //   state.workshop = action.payload;
    //   state.loading = false;
    // });
  },
});

export default todoReducer.reducer;
