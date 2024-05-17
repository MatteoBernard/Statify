import {store} from "../store";
import {fetchUserTopArtists} from "../api/spotify";
import {setError, setLoading, setTopArtists} from "../reducers/artists";

export const getUserTopArtists = async (token: string) => {
    store.dispatch(setLoading())
    fetchUserTopArtists(token, "short_term")
        .then(artists => {
            store.dispatch(setTopArtists({time_range: "short_term", artists}));
            return Promise.resolve(artists);
        })
        .catch(error => {
            console.error(error)
            store.dispatch(setError(error))
        })
    fetchUserTopArtists(token, "medium_term")
        .then(artists => {
            store.dispatch(setTopArtists({time_range: "medium_term", artists}));
            return Promise.resolve(artists);
        })
        .catch(error => {
            console.error(error)
            store.dispatch(setError(error))
        })
    return fetchUserTopArtists(token, "long_term")
        .then(artists => {
            store.dispatch(setTopArtists({time_range: "long_term", artists}));
            return Promise.resolve(artists);
        })
        .catch(error => {
            console.error(error)
            store.dispatch(setError(error))
        })
}