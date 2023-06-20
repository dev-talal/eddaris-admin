import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import { getRequest, postRequest } from '../../../api'
import { endpoints, requestPoints } from '../../storeEnums'

const initialState = {
    loading: true,
    data: {}
}

export const getDashboardData = createAsyncThunk(
    requestPoints.GET_DASHBOARD_POINT,
    async () => { 
       const result =  await postRequest({sales_type:'monthly',sales_record:6},endpoints.GET_DASHBOARD_ENDPOINT)
       return result.data  
    }
)


const todoReducer = createSlice({
    name:"dashboard",
    initialState,
    reducers:{
    },
    extraReducers: (builder) => {
        
        builder.addCase(getDashboardData.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false;
        });
    }

})

export default todoReducer.reducer