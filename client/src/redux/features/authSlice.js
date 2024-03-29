import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import * as api from '../api';

export const login = createAsyncThunk("auth/login",
    async({formValue,navigate,toast},{rejectWithValue}) => {
    try{
        const response = await api.signIn(formValue);
        toast.success("환영합니다 !!! ");
        navigate("/");
        return response.data;
    }catch(err){
        return  rejectWithValue(err.response.data);
    }
})

export const register = createAsyncThunk("auth/register",
    async({formValue,navigate,toast},{rejectWithValue}) => {
        try{
            const response = await api.signUp(formValue);
            toast.success("회원 가입 성공  !!! ");
            navigate("/");
            return response.data;
        }catch(err){
            return  rejectWithValue(err.response.data);
        }
    })




export const googleSignIn = createAsyncThunk(
    "auth/googleSignIn",
    async ({ result, navigate, toast }, { rejectWithValue }) => {
        try {
            const response = await api.googleSignIn(result);
            toast.success("회원 가입 성공  !!! ");
            navigate("/");
            return response.data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);



const authSlice = createSlice({
    name:"auth",
    initialState:{
        user:null,
        error:"",
        loading:false
    },
    extraReducers: {
        [login.pending] : (state,action) => {
            state.loading = true;
        },
        [login.fulfilled]:(state,action) => {
          state.loading = false;
          localStorage.setItem('profile',JSON.stringify({...action.payload}));
          state.user = action.payload;

        },   [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        [register.pending] : (state,action) => {
            state.loading = true;
        },
        [register.fulfilled]:(state,action) => {
            state.loading = false;
            localStorage.setItem('profile',JSON.stringify({...action.payload}));
            state.user = action.payload;

        },   [register.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

        [googleSignIn.pending]: (state, action) => {
            state.loading = true;
        },
        [googleSignIn.fulfilled]: (state, action) => {
            state.loading = false;
            localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
            state.user = action.payload;
        },
        [googleSignIn.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload.message;
        },

    }
});

export default  authSlice.reducer;