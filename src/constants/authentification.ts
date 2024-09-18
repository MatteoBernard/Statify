const CLIENT_ID: string = "SECRET";
const AUTH_ENDPOINT: string = "https://accounts.spotify.com/authorize";
const REDIRECT_URL: string = "http://matteobernard.github.io/Statify";
const SCOPES: string[] = [
    "user-top-read",
    "user-read-private",
    "playlist-read-private",
    "user-read-recently-played",
];
const SCOPES_URL_PARAM: string = SCOPES.join("%20");
export const AUTH_URL: string = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_URL_PARAM}&response_type=token&show_dialog=true"`;