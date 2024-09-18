export interface Track {
    album: {
        album_type: string;
        artists: [
            {
                external_urls: {
                    spotify: string;
                };
                href: string;
                id: string;
                name: string;
                type: string;
                uri: string;
            }
        ];
        available_markets: string[];
        external_urls: {
            spotify: string;
        };
        href: string;
        id: string;
        images: [
            {
                height: number;
                url: string;
                width: number;
            }
        ];
        name: string;
        release_date: string;
        release_date_precision: string;
        restrictions: {
            reason: string;
        }
        total_tracks: number;
        type: string;
        uri: string;
    };
    artists: [
        {
            external_urls: {
                spotify: string;
            };
            followers: {
                href: string;
                total: number;
            };
            genres: string[];
            href: string;
            id: string;
            images: [
                {
                    height: number;
                    url: string;
                    width: number;
                }
            ];
            name: string;
            popularity: number;
            type: string;
            uri: string;
        }
    ];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
        isrc: string;
        ean: string;
        upc: string;
    };
    external_urls: {
        spotify: string;
    };
    href: string;
    id: string;
    is_playable: boolean;
    restrictions: {
        reason: string;
    }
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
    is_local: boolean;
}