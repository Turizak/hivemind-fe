import getCurrentTime from "./getCurrentTime";
import getExpiry from "./getExpiry";
import getNewAccessToken from "./getNewAccessToken";

const validateToken = () => {
    console.log('Checking Token...')
    const currentTime = getCurrentTime();
    const expiry = getExpiry();
    if (currentTime < expiry) {
        console.log('Token is valid, seconds remaining = ', expiry - currentTime)
        return
    } console.log('Token is expired') 
        getNewAccessToken();
}

export default validateToken