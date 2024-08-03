const useIso = (isoTime: string) => {
  const date = new Date(isoTime);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  };

  const formattedTime = date.toLocaleString("en-US", options);
  return formattedTime;
};

export default useIso;
