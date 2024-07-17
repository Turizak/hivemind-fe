const getRefreshToken = () => {
    if (!localStorage.getItem("refreshToken")) {
        throw new Error('Failed to get refresh token')
    }
    const refreshToken: string | null = localStorage.getItem("refreshToken")
    return refreshToken
}

export default getRefreshToken