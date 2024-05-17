const CLIENT_ID: string = "c1896354b0c54f8fa0bb2858a6239e30";
const AUTH_ENDPOINT: string = "https://accounts.spotify.com/authorize";
const REDIRECT_URL: string = "http://localhost:3000";
const SCOPES: string[] = [
    "user-top-read",
    "user-read-private",
    "user-read-playback-state",
    "streaming",
    "user-read-recently-played",
    "user-library-read",
];
const SCOPES_URL_PARAM: string = SCOPES.join("%20");
export const AUTH_URL: string = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true"`;
