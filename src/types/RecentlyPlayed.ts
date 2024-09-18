import {RecentlyPlayedContent} from "./RecentlyPlayedContent";

export interface RecentlyPlayed {
    items: RecentlyPlayedContent[];
    next: string;
    cursors: {
        after: string;
        before: string;
    }
    limit: number;
    href: string;
}