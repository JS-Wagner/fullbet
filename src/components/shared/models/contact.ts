export interface ApiResponse<T>{
    message?: string;
    data: T
}

export default interface IContact{
    _id?: string;
    name: string;
    email: string;
    message: string;
}