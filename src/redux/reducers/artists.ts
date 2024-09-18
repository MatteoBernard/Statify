import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Artists} from "../../types";

interface ArtistsState {
    topArtists: Record<string, Artists>;
    isFetching: boolean;
    error: boolean;
}

const initialState: ArtistsState = {
    topArtists: {},
    isFetching: false,
    error: false,
};

export const artistsSlice = createSlice({
    name: "artists",
    initialState: initialState,
    reducers: {
        setLoading: (state) => {
            state.isFetching = true;
        },
        setTopArtists: (state, action: PayloadAction<{ time_range: string, artists: Artists }>) => {
            const { time_range, artists } = action.payload;
            state.topArtists[time_range] = artists;
            state.isFetching = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isFetching = false;
        },
    },
});

export const {setTopArtists, setError, setLoading} = artistsSlice.actions;