import { useState, useEffect } from 'react'
import axios, { AxiosError } from 'axios'

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        const result = await axios.get(url, {
          headers: {
            Authorization: `Basic ${btoa(
              `${import.meta.env.VITE_APP_CLIENT_ID}:${
                import.meta.env.VITE_APP_CLIENT_SECRET
              }`,
            )}`,
          },
        })
        setData(result.data)
      } catch (error) {
        const axiosError = error as AxiosError
        setError(axiosError.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
