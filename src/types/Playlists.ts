import {Playlist} from "./Playlist";

export interface Playlists {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Playlist[];
}