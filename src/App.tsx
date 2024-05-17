import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Dashboard, Login, Playlists, RecentlyPlayed, ShowPlaylist, TopArtists, TopTracks} from "./pages";

function App() {
  return (
      <Routes>
        <Route path={"/"} element={<Login />}/>
        <Route path={"/dashboard"} element={<Dashboard />}/>
        <Route path={"/playlists"} element={<Playlists />}/>
        <Route path={"/showPlaylist/:playlistId"} element={<ShowPlaylist />}/>
        <Route path={"/topTracks"} element={<TopTracks />}/>
        <Route path={"/topArtists"} element={<TopArtists />}/>
        <Route path={"/recentlyPlayed"} element={<RecentlyPlayed />}/>
      </Routes>
  )
}

export default App;
