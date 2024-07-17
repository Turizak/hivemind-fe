import getAccessToken from "../utils/getAccessToken";
import getRefreshToken from "../utils/getRefreshToken"
import getCurrentTime from "../utils/getCurrentTime";
import setExpiry from "../utils/setExpiry";

const useUserValidation = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();
  const currentTime = getCurrentTime();
  const expiry = setExpiry();
  return { accessToken, refreshToken, currentTime, expiry };
};

export default useUserValidation;
