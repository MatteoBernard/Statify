import {Track} from "./Track";

export interface RecentlyPlayedContent {
    track: Track;
    played_at: string;
    context: {
        external_urls: {
            spotify: string;
        };
        href: string;
        type: string;
        uri: string;
    }
}