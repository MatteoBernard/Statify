import {Track} from "./Track";

export interface Tracks {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: Track[];
}