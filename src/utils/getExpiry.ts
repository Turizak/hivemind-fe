function getExpiry() {
    const expiry = localStorage.accessTokenExpiry
    return +expiry

}
export default getExpiry;