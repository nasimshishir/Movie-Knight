export type PopupState = {
    isVisible: boolean;
    content?: React.ReactNode;
    onClose?: () => void;
}

export type MediaBase = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    vote_average: number;
    vote_count: number;
}

export type Movie = MediaBase & {
    original_title: string;
    title: string;
    release_date: string;
    video: boolean;
}

export type TvShow = MediaBase & {
    original_name: string;
    name: string;
    first_air_date: string;
    origin_country: string[];
}

export type Media = Movie | TvShow;