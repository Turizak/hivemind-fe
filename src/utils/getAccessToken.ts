function getAccessToken() {
    if (!localStorage.getItem("accessToken")) {
        throw new Error('Failed to get access token')
    }
    const token: string | null = localStorage.getItem("accessToken")
    return token
}

export default getAccessToken