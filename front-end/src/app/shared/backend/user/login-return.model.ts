import UserPublicData from "./user-public-data.model"

interface LoginReturn {
    data: {
        token: string,
        userPublicData: UserPublicData
    }
}

export default LoginReturn