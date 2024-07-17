import getAccessToken from "../utils/getAccessToken";
import getCurrentTime from "../utils/getCurrentTime";
import setExpiry from "../utils/setExpiry";

const useUserValidation = () => {
  const accessToken = getAccessToken();
  const currentTime = getCurrentTime();
  const expiry = setExpiry();
  return { accessToken, currentTime, expiry };
};

export default useUserValidation;
