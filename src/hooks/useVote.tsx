import { useMutation } from '@tanstack/react-query';

const useVote = (successFn: any) => {

  const castVote = async (url: any) => {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        Accept: '*/*',
      },
    });
    if (!response.ok) {
      throw new Error('Failed');
    }
    return await response.json();
  };

  const { mutate } = useMutation({
    mutationFn: castVote,
    onSuccess: successFn
  });

  return { mutate };
};

export default useVote;
