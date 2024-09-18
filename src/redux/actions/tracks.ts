import {store} from "../store";
import {addTracks, setError, setLoading, setRecentlyPlayed, setTopTracks} from "../reducers/tracks";
import {fetchUserPlaylistContent, fetchUserRecentlyPlayed, fetchUserTopTracks} from "../api/spotify";

export const getUserPlaylistContent = async (token: string, playlistId: string) => {
    store.dispatch(setLoading())
    return fetchUserPlaylistContent(token, playlistId)
        .then(tracks => {
            store.dispatch(addTracks({playlistId, tracks}))
            return Promise.resolve(tracks)
        })
        .catch(error => {
            console.error(error)
            store.dispatch(setError(error))
        })
}

export const getUserTopTracks = async (token: string) => {
    store.dispatch(setLoading())
    fetchUserTopTracks(token, "short_term")
        .then(tracks => {
            store.dispatch(setTopTracks({time_range: "short_term", tracks}));
            return Promise.resolve(tracks);
        })
        .catch(error => {
            console.error(error)
            store.dispatch(setError(error))
        })
    fetchUserTopTracks(token, "medium_term")
        .then(tracks => {
            store.dispatch(setTopTracks({time_range: "medium_term", tracks}));
            return Promise.resolve(tracks);
        })
        .catch(error => {
            console.error(error)
            store.dispatch(setError(error))
        })
    return fetchUserTopTracks(token, "long_term")
        .then(tracks => {
            store.dispatch(setTopTracks({time_range: "long_term", tracks}));
            return Promise.resolve(tracks);
        })
        .catch(error => {
            console.error(error)
            store.dispatch(setError(error))
        })
}

export const getUserRecentlyPlayed = async (token: string) => {
    store.dispatch(setLoading());
    return fetchUserRecentlyPlayed(token)
        .then(recentlyPlayed => {
            store.dispatch(setRecentlyPlayed(recentlyPlayed))
            return Promise.resolve(recentlyPlayed)
        })
        .catch(error => {
            console.error(error)
            store.dispatch(setError(error))
        })
}