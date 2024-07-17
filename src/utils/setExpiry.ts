function setExpiry() {
    if (!localStorage.getItem("accessTokenExpiry")) {
      throw new Error('Failed to get expiry')
    }
    const expiry: any = localStorage.getItem("accessTokenExpiry");
    return +expiry
  }

  export default setExpiry;