import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const INT_STATE = {
    employeesData:[],
    isLoading:false,
    isError:null
}

// for fetching Data

export const fetchEmployeeDataAsyncThunk = createAsyncThunk("fetchEmployeeData",async(args)=>{

    const response = await fetch("https://653686dbbb226bb85dd244f8.mockapi.io/employee");

    try{
        const result = await response.json();
        return result
    }
    catch(error){
        return console.log(error);
    }
});

export const employeeSlice = createSlice({
    name:"employee",
    initialState:INT_STATE,
    reducers:{},
    extraReducers:(builder)=>{
        builder 
        .addCase(fetchEmployeeDataAsyncThunk.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(fetchEmployeeDataAsyncThunk.fulfilled,(state,action)=>{
            state.isLoading=false;
            console.log("Fetch Data",action.payload);
            state.employeesData= action.payload;
        })
        .addCase(fetchEmployeeDataAsyncThunk.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError = action.payload
        })
    }
})


export default employeeSlice.reducer