import { useEffect, useState } from "react"

  
export interface UseEffectProps {
    url: string
}

export const useFetch = <T> ({url}: UseEffectProps) => {



  const [tiempo, setTiempo] = useState<T | null>(null);
  const [hasError, setHasError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  
const fetchTiempo = async (e?: React.FormEvent<HTMLFormElement>) => {
    
    e?.preventDefault();
    setIsFetching(true);
    try{
        const response = await fetch(url);
        const datos = await response.json();
        setTiempo(datos);
        setIsFetching(false);
    } catch (e) {
        setHasError(true);
        setIsFetching(false);
    }
}

useEffect(() => {
    (async () => {
        await fetchTiempo();
    }) ()
}, [])

  return {
    tiempo,
    fetchTiempo,
    hasError,
    isFetching
  }
}
