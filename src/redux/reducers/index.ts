import {authSlice} from "./auth";
import {combineReducers} from "@reduxjs/toolkit";
import {playlistsSlice} from "./playlists";
import {tracksSlice} from "./tracks";
import {artistsSlice} from "./artists";

export default combineReducers({
    auth: authSlice.reducer,
    playlists: playlistsSlice.reducer,
    tracks: tracksSlice.reducer,
    artists: artistsSlice.reducer,
});
