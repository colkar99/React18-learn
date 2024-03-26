import { useQuery } from "@tanstack/react-query";
import useData from "./useData";
import platformService from "../services/platformService";



const usePlatform = () => {
    //useData<Platform>('/platforms/lists/parents');
    return useQuery({
        queryKey: ['platforms'],
        queryFn: platformService.getAll,
        staleTime: 24 * 60 * 60 * 1000 // 24 hours
    })

}

export default usePlatform;
