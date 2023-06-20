import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../../api";
import Swal from "sweetalert2";
import { endpoints, requestPoints } from "../storeEnums";

export const loginApiThunk = createAsyncThunk(
  requestPoints.POST_LOGIN,
  async ({ email, password }) => {
    let { data } = await postRequest({ email, password }, endpoints.LOGIN_ENDPOINT);
    return data;
  }
);

export const loggedinUserApiThunk = createAsyncThunk(
  requestPoints.GET_AUTH_USER,
  async () => {
    let { data } = await getRequest(endpoints.GET_AUTH_ENDPOINT);
    return data;
  }
);

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    isAuthenticated: false,
    user: null,
    token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginApiThunk.pending, (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(loginApiThunk.fulfilled, (state, action) => {
      console.log(action.payload)
      localStorage.setItem("adminToken", action.payload.token);
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      window.location = "/"
    });
    builder.addCase(loginApiThunk.rejected, (state, action) => {
      state.loading = false;
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Authentication Failed !",
        showConfirmButton: false,
        timer: 2000,
      });
      state.isAuthenticated = false;
    });

    builder.addCase(loggedinUserApiThunk.pending, (state, action) => {
      state.loading = true;
      state.isAuthenticated = false;
    });
    builder.addCase(loggedinUserApiThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(loggedinUserApiThunk.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
    });
  }, // Use for External apis
});

export default AuthSlice.reducer;
