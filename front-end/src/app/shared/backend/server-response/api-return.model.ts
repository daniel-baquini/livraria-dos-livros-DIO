interface ApiReturn<T> {
    data: T,
    invalidJwt: boolean
}

export default ApiReturn