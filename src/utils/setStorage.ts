import useJWT from "../hooks/useJWT"

const setStorage = (accessToken: string, refreshToken: string) => {
    const accessJWT = useJWT(accessToken);
    const refreshJWT = useJWT(refreshToken);
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken)
    localStorage.setItem("username", accessJWT.Username);
    localStorage.setItem("accountUUID", accessJWT.AccountUUID);
    localStorage.setItem("accessTokenExpiry", accessJWT.Exp)
    localStorage.setItem("refreshTokenExpiry", refreshJWT.Exp)
}
export default setStorage