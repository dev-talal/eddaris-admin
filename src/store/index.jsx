import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import dashboardSlice from "./Slices/dashboard/dashboardSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import classSlice from "./Slices/class/classSlice";
import tutorSlice from "./Slices/tutor/tutorSlice";
import studentSlice from "./Slices/student/studentSlice";
import workshopSlice from "./Slices/workshop/workshopSlice";
import NotifySlice from "./Slices/notify/NotifySlice";
import categorySlice from "./Slices/category/categorySlice";

const persistConfig = {
  key: "auth",
  storage,
};

const rootReducer = combineReducers({
  auth: AuthSlice,
  dashboard: dashboardSlice,
  class: classSlice,
  tutor: tutorSlice,
  student: studentSlice,
  workshop: workshopSlice,
  notifications: NotifySlice,
  category: categorySlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);
