import {Artists, PlaylistContent, Playlists, RecentlyPlayed, Tracks, User} from "../../types";

const BASE_URL: string = "https://api.spotify.com/v1";

export const fetchUserDb = async (token: string): Promise<User> => {
    const url = `${BASE_URL}/me`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then(data => {
            if (Object.keys(data).includes("error")) {
                return Promise.reject(new Error(data.error));
            } else {
                return data;
            }
        })
        .catch(error => Promise.reject(new Error(error.message)));
};

export const fetchUserPlaylists = async (token: string): Promise<Playlists> => {
    const url = `${BASE_URL}/me/playlists`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then(data => {
            if (Object.keys(data).includes("error")) {
                return Promise.reject(new Error(data.error));
            } else {
                return data;
            }
        })
        .catch(error => Promise.reject(new Error(error.message)));
}

export const fetchUserPlaylistContent = async (token: string, playlistId: string): Promise<PlaylistContent> => {
    const url = `${BASE_URL}/playlists/${playlistId}/tracks`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then(data => {
            if (Object.keys(data).includes("error")) {
                return Promise.reject(new Error(data.error));
            } else {
                return data;
            }
        })
        .catch(error => Promise.reject(new Error(error.message)));
}

export const fetchUserTopTracks = async (token: string, time_range: string): Promise<Tracks> => {
    const url = `${BASE_URL}/me/top/tracks?limit=50&time_range=${time_range}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then(data => {
            if (Object.keys(data).includes("error")) {
                return Promise.reject(new Error(data.error));
            } else {
                return data;
            }
        })
        .catch(error => Promise.reject(new Error(error.message)));
}

export const fetchUserTopArtists = async (token: string, time_range: string): Promise<Artists> => {
    const url = `${BASE_URL}/me/top/artists?limit=50&time_range=${time_range}`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then(data => {
            if (Object.keys(data).includes("error")) {
                return Promise.reject(new Error(data.error));
            } else {
                return data;
            }
        })
        .catch(error => Promise.reject(new Error(error.message)));
}

export const fetchUserRecentlyPlayed = async (token: string): Promise<RecentlyPlayed> => {
    const url = `${BASE_URL}/me/player/recently-played?limit=50`;
    return fetch(url, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })
        .then(response => response.json())
        .then(data => {
            if (Object.keys(data).includes("error")) {
                return Promise.reject(new Error(data.error));
            } else {
                return data;
            }
        })
        .catch(error => Promise.reject(new Error(error.message)));
}