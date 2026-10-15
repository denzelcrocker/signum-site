import { useEffect, useState } from 'react'

export function useFetch<T>(fetcher: () => Promise<T | null>, deps: unknown[]) {
  const [data, setData] = useState<null | T>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError(false)
    fetcher().then(result => {
      if (cancelled) return
      if (result === null) setError(true)
      else setData(result)
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return { data, error, loading }
}
