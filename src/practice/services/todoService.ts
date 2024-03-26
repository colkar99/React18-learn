import ApiClient from "./apiClient";

export interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const todoService =  new ApiClient<Todo>('/todos');
export default todoService
