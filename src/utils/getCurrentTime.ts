function getCurrentTime() {
    const milliseconds = new Date().getTime();
    // Convert milliseconds to seconds
    const seconds = Math.floor(milliseconds / 1000);
    return seconds;
}

export default getCurrentTime;