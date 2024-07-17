function getAccessToken() {
    if (!localStorage.getItem("accessToken")) {
        throw new Error('Failed to get access token')
    }
    const accessToken: string | null = localStorage.getItem("accessToken")
    return accessToken
}

export default getAccessToken