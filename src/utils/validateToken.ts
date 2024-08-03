const validateToken = async () => {
  function getCurrentTime() {
    const milliseconds = new Date().getTime();
    const seconds = Math.floor(milliseconds / 1000);
    return seconds;
  }
  const currentTime = getCurrentTime();
  const accessExpiry = +localStorage.accessTokenExpiry;
  const refreshExpiry = +localStorage.refreshTokenExpiry;
  const tokenValidation = {
    accessTokenExpired: false,
    refreshTokenExpired: false
  }
  if (currentTime < accessExpiry) {
    console.log('Tokens Fresh')
    return
  }
  if (currentTime > refreshExpiry) {
    console.log('Refresh Token Expired')
    tokenValidation.refreshTokenExpired = true
  }
  if (currentTime > accessExpiry) {
    console.log('Access Token Expired')
    tokenValidation.accessTokenExpired = true
  } 
  return tokenValidation
};

export default validateToken;
