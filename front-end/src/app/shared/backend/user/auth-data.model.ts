import UserPublicData from "./user-public-data.model";

interface AuthData {
    token: string,
    userPublicData: UserPublicData
}

export default AuthData