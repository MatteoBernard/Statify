import {Track} from "./Track";

export interface PlaylistContent {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: {
        added_at: string;
        added_by: {
            external_urls: {
                spotify: string;
            };
            href: string;
            id: string;
            type: string;
            uri: string;
        };
        is_local: boolean;
        track: Track;
    }[]
}