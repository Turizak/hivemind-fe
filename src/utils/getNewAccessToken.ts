import setStorage from "./setStorage";

const getNewAccessToken = async () => {
  const baseURL = import.meta.env.VITE_BASEURL
  const accessToken = localStorage.getItem("accessToken");
  const body = {
    RefreshToken: localStorage.getItem("refreshToken"),
  };
  try {
    if (!accessToken || !body.RefreshToken) {
      throw new Error("Failed to get token from local storage");
    }
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
      throw new Error(`Failed to fetch new token: ${response.status}`);
    }
    const results = await response.json();
    setStorage(results.Token, results.RefreshToken)
    return 
  } catch (error) {
    console.error(error);
  }
}

export default getNewAccessToken;
