import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../../api";
import { endpoints, requestPoints } from "../../storeEnums";

const initialState = {
  loading: true,
  tutor_dashboard: {},
  tutor: null,
  transactions: {},
  classes: {},
  top_tutors: {},
  featured_tutors: {}
};

export const getTutorsData = createAsyncThunk(
  requestPoints.GET_ALL_TUTORS_POINT,
  async ({ page, limit }) => {
    const result = await postRequest(
      { limit, page },
      endpoints.GET_ALL_TUTORS_ENDPOINT
    );
    return result.data;
  }
);

export const getTutorDetailsData = createAsyncThunk(
  requestPoints.GET_TUTOR_DETAILS_POINT,
  async ({ id }) => {
    const result = await getRequest(
      `${endpoints.GET_TUTOR_DETAILS_ENDPOINT}/${id}`
    );
    return result.data;
  }
);

export const getTutorTransactionsData = createAsyncThunk(
  requestPoints.GET_TUTOR_TRANSACTIONS_POINT,
  async (body) => {
    const result = await postRequest(
      body,
      `${endpoints.GET_TUTOR_TRANSACTIONS_ENDPOINT}`,
    );
    return result.data;
  }
);

export const getTutorClassesData = createAsyncThunk(
  requestPoints.GET_TUTOR_CLASSES_POINT,
  async (body) => {
    const result = await postRequest(
      body,
      `${endpoints.GET_TUTOR_CLASSES_ENDPOINT}`,
    );
    return result.data;
  }
);

export const getTopTutorsData = createAsyncThunk(
  requestPoints.GET_TOP_TUTOR_POINT,
  async (body) => {
    const result = await postRequest(
      body,
      `${endpoints.GET_TOP_TUTOR_ENDPOINT}`,
    );
    return result.data;
  }
);

export const getFeaturedTutorsData = createAsyncThunk(
  requestPoints.GET_FEATURED_TUTOR_POINT,
  async (body) => {
    const result = await postRequest(
      body,
      `${endpoints.GET_FEATURED_TUTOR_ENDPOINT}`,
    );
    return result.data;
  }
);

const todoReducer = createSlice({
  name: "tutor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    // Get all tutors

    builder.addCase(getTutorsData.fulfilled, (state, action) => {
      state.tutor_dashboard = action.payload;
      state.loading = false;
    });

    // Get tutor detail

    builder.addCase(getTutorDetailsData.pending, (state) => {
      state.loading = true;
      state.tutor = {};
    });

    builder.addCase(getTutorDetailsData.fulfilled, (state, action) => {
      state.tutor = action.payload;
      state.loading = false;
    });
    
    // Get transactions in tutors

    builder.addCase(getTutorTransactionsData.pending, (state) => {
      state.loading = true;
      state.transactions = {};
    });

    builder.addCase(getTutorTransactionsData.fulfilled, (state, action) => {
      state.transactions = action.payload;
      state.loading = false;
    });

    // Get classes in tutors

    builder.addCase(getTutorClassesData.pending, (state) => {
      state.classes.loading = true; 
      state.classes.data = {};
    });

    builder.addCase(getTutorClassesData.fulfilled, (state, action) => {
      state.classes.loading = false; 
      state.classes.data = action.payload;
    });

    // Get top tutors

    builder.addCase(getTopTutorsData.fulfilled, (state, action) => {
      state.top_tutors = action.payload;
      state.loading = false;
    });

    builder.addCase(getTopTutorsData.rejected, (state) => {
      state.loading = false;
    });
   
    // Get featured tutuors

    builder.addCase(getFeaturedTutorsData.fulfilled, (state, action) => {
      state.featured_tutors = action.payload;
      state.loading = false;
    });

    builder.addCase(getFeaturedTutorsData.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default todoReducer.reducer;
