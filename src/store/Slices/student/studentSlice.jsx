import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../../api";
import { endpoints, requestPoints } from "../../storeEnums";

const initialState = {
  loading: true,
  student_dashboard: {},
  student: null,
};

export const getStudentsData = createAsyncThunk(
  requestPoints.GET_ALL_STUDENTS_POINT,
  async ({ page, limit }) => {
    const result = await postRequest(
      { limit, page },
      endpoints.GET_ALL_STUDENTS_ENDPOINT
    );
    return result.data;
  }
);

export const getStudentDetailsData = createAsyncThunk(
  requestPoints.GET_STUDENT_DETAILS_POINT,
  async ({ id }) => {
    const result = await getRequest(
      `${endpoints.GET_STUDENT_DETAILS_ENDPOINT}/${id}`
    );
    return result.data;
  }
);

const todoReducer = createSlice({
  name: "student",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getStudentsData.fulfilled, (state, action) => {
      state.student_dashboard = action.payload;
      state.loading = false;
    });

    builder.addCase(getStudentDetailsData.fulfilled, (state, action) => {
      state.student = action.payload;
      state.loading = false;
    });
  },
});

export default todoReducer.reducer;
