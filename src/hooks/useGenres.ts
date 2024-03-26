
import { useQuery } from '@tanstack/react-query';
import genresService, { Genres } from '../services/genresService';
import useData from './useData';


export default function useGenres() {
    //return   useData<Genres>('/genres')
    return useQuery({
        queryKey: ['genres'],
        queryFn: genresService.getAll,
        staleTime: 24 * 60 * 60 * 1000
    })
};

