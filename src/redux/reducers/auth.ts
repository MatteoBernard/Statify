import {createSlice} from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isFetching: false,
        error: false
    },
    reducers: {
        setLoading: (state) => {
            state.isFetching = true;
        },
        setUser: (state, action) => {
            state.user = action.payload;
            state.isFetching = false;
        },
        setToken: (state, action) => {
            state.token = action.payload;
            state.isFetching = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isFetching = false;
        }
    },
});

export const {setUser, setError, setToken, setLoading} = authSlice.actions;
