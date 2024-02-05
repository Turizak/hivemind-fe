import { useQuery } from "@tanstack/react-query"

const useGetContent = (url: string) => {
    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    const { data, error, isLoading, isError, isFetching } = useQuery({
        queryKey: ['content'],
        queryFn: getData
    })

  return { data, error, isLoading, isError, isFetching }
}

export default useGetContent