import ApiReturn from "./api-return.model";

interface JavaErrorResponse<T> {
    error: ApiReturn<T>;
    message: string;
    name: string;
    ok: boolean;
    status: number;
    statusText: string;
    url: string;
}

export default JavaErrorResponse