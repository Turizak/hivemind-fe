import { useQuery } from "@tanstack/react-query"

const useGet = (url: string) => {
    const getData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }

    const { data } = useQuery({
        queryKey: ['items'],
        queryFn: getData
    })

  return { data }
}

export default useGet