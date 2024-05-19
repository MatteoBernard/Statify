import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Dashboard, Login, Playlists, RecentlyPlayed, ShowPlaylist, TopArtists, TopTracks} from "./pages";
import {clsx} from "clsx";

function App() {
  return (
      <div className={clsx(
          "bg-spotifyBlack",
          "text-white",
          "min-h-screen",
          "font-sans"
      )}>
          <Routes>
              <Route path={"/dashboard"} element={<Dashboard />}/>
              <Route path={"/playlists"} element={<Playlists />}/>
              <Route path={"/showPlaylist/:playlistId"} element={<ShowPlaylist />}/>
              <Route path={"/topTracks"} element={<TopTracks />}/>
              <Route path={"/topArtists"} element={<TopArtists />}/>
              <Route path={"/recentlyPlayed"} element={<RecentlyPlayed />}/>
              <Route path={"/"} element={<Login />}/>
              <Route path={"/*"} element={<Login />}/>
          </Routes>
      </div>
  );
}

export default App;
