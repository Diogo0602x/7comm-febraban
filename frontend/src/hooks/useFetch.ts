import { useState, useEffect, useRef } from 'react'
import axios, { AxiosError } from 'axios'

const useFetch = (url: string) => {
  const [data, setData] = useState<any[]>([])
  const [initialLoading, setInitialLoading] = useState<boolean>(true)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const intervalRef = useRef<number>()

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
        setInitialLoading(false)
      }
    }

    fetchData()
    intervalRef.current = window.setInterval(fetchData, 5000)

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [url])

  return { data, initialLoading, isLoading, error }
}

export default useFetch
