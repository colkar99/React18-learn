
import useData from './useData';

export interface Genres{
    id: number,
    name: string,
    image_background: string
}

export default function useGenres() {return   useData<Genres>('/genres')};

