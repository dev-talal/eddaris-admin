import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { getRequest, postRequest, putRequest } from '../../../api'
import { endpoints, requestPoints } from '../../storeEnums'

const initialState = {
    loading: true,
    class_dashboard: {},
    singleClass: null
}

export const getClassesData = createAsyncThunk(
    requestPoints.GET_ALL_CLASSES_POINT,
    async ({page, limit}) => { 
       const result =  await postRequest({limit,page},endpoints.GET_ALL_CLASSES_ENDPOINT)
       return result.data  
    }
)

export const getClassDetailsData = createAsyncThunk(
    requestPoints.GET_CLASS_DETAILS_POINT,
    async ({ id }) => {
        const result = await getRequest(
        `${endpoints.GET_CLASS_DETAILS_ENDPOINT}/${id}`
        );
        return result.data;
    }
)

export const deleteClass = createAsyncThunk(
    requestPoints.DELETE_CLASS_POINT,
    async ({ id }) => {
        const result = await putRequest(
        `${endpoints.DELETE_CLASS_ENDPOINT}/${id}`
        );
        return result.data;
    }
)


const todoReducer = createSlice({
    name:"class",
    initialState,
    reducers:{},
    extraReducers: (builder) => {

        builder.addCase(getClassesData.fulfilled, (state, action) => {
            state.class_dashboard = action.payload;
            state.loading = false;
        });

        builder.addCase(getClassDetailsData.pending, (state) => {
            state.loading = true;
            state.singleClass = {};
        });

        builder.addCase(getClassDetailsData.fulfilled, (state, action) => {
            state.singleClass = action.payload.class;
            state.loading = false;
        });

        builder.addCase(deleteClass.fulfilled, (state, action) => {
            state.class_dashboard.classes =  state.class_dashboard.classes.filter((x) => x._id!== action?.meta?.arg?.id)
        });
    }

})

export default todoReducer.reducer