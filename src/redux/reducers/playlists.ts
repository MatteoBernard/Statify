import {createSlice} from "@reduxjs/toolkit";

export const playlistsSlice = createSlice({
    name: "playlists",
    initialState: {
        playlists: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        setLoading: (state) => {
            state.isFetching = true;
        },
        setPlaylists: (state, action) => {
            state.playlists = action.payload;
            state.isFetching = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isFetching = false;
        },
    },
});

export const {setPlaylists, setError, setLoading} = playlistsSlice.actions;