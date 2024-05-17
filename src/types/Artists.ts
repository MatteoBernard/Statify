import {Artist} from "./Artist";

export interface Artists {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: Artist[];
}