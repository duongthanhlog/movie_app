import { setGlobalLoading } from "@/store/Slices/globalLoadingSlice"
import { fetchDataFromApi } from "@/utils/httpRequest"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

function useFetch (url) {
    const [data, setData] = useState()
    const [error, setError] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setGlobalLoading(true))
        fetchDataFromApi(url)
            .then(data => {
                setData(data)
                dispatch(setGlobalLoading(false))
            })
            .catch(err => {
                setError(err)
                dispatch(setGlobalLoading(false))
            })
    }, [url])
    return {data, error}
}

export default useFetch