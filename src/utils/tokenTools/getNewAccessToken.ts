import setStorage from "../setStorage";

const getNewAccessToken = async (): Promise<string> => {
  const baseURL = import.meta.env.VITE_BASEURL
  const accessToken = localStorage.getItem("accessToken");
  const body = {
    RefreshToken: localStorage.getItem("refreshToken"),
  };
      console.log('New Access Token Requested')
      const response = await fetch(baseURL + "/account/token/refresh", {
        method: "POST",
        headers: {
          Accept: "*/*",
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: Failed to fetch new token`);
      }
      const results = await response.json();
      console.log(`${response.status}: New Access Token Received`)
      setStorage(results.Token, results.RefreshToken)
      return results.Token;
    }

export default getNewAccessToken
