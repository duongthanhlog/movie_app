import { fetchDataFromApi } from "@/utils/httpRequest";

const exploreLoader = async ({params}) => {
    const genres = await fetchDataFromApi(`genre/${params.mediaType}/list`) 
    return genres
}

export default exploreLoader