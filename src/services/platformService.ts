import { ApiClient } from "./apiClient"

export interface Platform{
    id: number;
    slug: string;
    name: string;
}

const platformService = new ApiClient<Platform>('/platforms/lists/parents')
export default platformService;
