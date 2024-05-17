import {PlaylistContent, RecentlyPlayed, Tracks} from "../../types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PlaylistContentState {
    tracks: Record<string, PlaylistContent>;
    topTracks: Record<string, Tracks>;
    recentlyPlayed: RecentlyPlayed | undefined;
    isFetching: boolean;
    error: boolean;
}

const initialState: PlaylistContentState = {
    tracks: {},
    topTracks: {},
    recentlyPlayed: undefined,
    isFetching: false,
    error: false,
};

export const tracksSlice = createSlice({
    name: "tracks",
    initialState: initialState,
    reducers: {
        setLoading: (state) => {
            state.isFetching = true;
        },
        addTracks: (state, action: PayloadAction<{ playlistId: string; tracks: PlaylistContent }>) => {
            const { playlistId, tracks } = action.payload;
            state.tracks[playlistId] = tracks;
            state.isFetching = false;
            state.error = false;
        },
        setTopTracks: (state, action: PayloadAction<{ time_range: string, tracks: Tracks }>) => {
            const { time_range, tracks } = action.payload;
            state.topTracks[time_range] = tracks;
            state.isFetching = false;
        },
        setRecentlyPlayed(state, action: PayloadAction<RecentlyPlayed>) {
            state.recentlyPlayed = action.payload;
            state.isFetching = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isFetching = false;
        },
    },
});

export const {addTracks, setError, setLoading, setTopTracks, setRecentlyPlayed} = tracksSlice.actions;