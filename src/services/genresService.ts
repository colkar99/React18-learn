import { ApiClient } from "./apiClient"

export interface Genres{
    id: number,
    name: string,
    image_background: string
}

const genresService = new ApiClient<Genres>('/genres')
export default genresService;
