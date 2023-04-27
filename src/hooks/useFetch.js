import request from "@/request/request"
import { useEffect, useState } from "react"

function useFetch (url, params = {}) {
    const [data, setData] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(() => {
        request.get(url, {params})
            .then(data => {
                setData(data.data.results)
                setIsloading(false)
            })
            .catch(err => {
                setError(err)
            })
    },[])
    return {data, error, isLoading}
}

export default useFetch