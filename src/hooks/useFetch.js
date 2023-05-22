import { fetchDataFromApi } from "@/utils/httpRequest"
import { useEffect, useState } from "react"

function useFetch (url) {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        fetchDataFromApi(url)
            .then(data => {
                setData(data)
                setIsloading(false)
            })
            .catch(err => {
                setError(err)
                setIsloading(false)
            })
    }, [url])
    return {data, error, isLoading}
}

export default useFetch