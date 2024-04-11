import { useMutation } from "@tanstack/react-query";

const useVote = (url: string, setter: any) => {
  // const accessToken = localStorage.getItem('accessToken')
  const castVote = async () => {
    const response = await fetch(url, {
      method: "PATCH",
      // credentials: 'include',
      headers: {
        // Authorization: `Bearer ${accessToken}`,
        Accept: "*/*",
      },
    });
    if (!response.ok) {
      throw new Error("Failed");
    }
    return await response.json();
  };

  const { mutate } = useMutation({
    mutationFn: castVote,
    onMutate: setter,
  });

  return { mutate };
};

export default useVote;
