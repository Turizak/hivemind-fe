const useIso = (isoTime: any) => {
    const date = new Date(isoTime);
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short', // Optional: Include time zone
      };

    const formattedTime = date.toLocaleString('en-US', options);
     return formattedTime;
      }

export default useIso