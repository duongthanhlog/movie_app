import axios from "axios";
import { camelizeKeys } from "humps";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDIyZDNlOWFhYTg3NmY0MGE0NDgyMTRiOTE5YzE3OSIsInN1YiI6IjY0Mzk3MTI2OTY2NzBlMDA5M2I4M2QzNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kGfdbWsikta3SM52-MKVG62trN4IVru0PT4RScRQjd4";
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "Authorization: Bearer" + ACCESS_TOKEN,
  },
  params : {
    api_key: import.meta.env.VITE_API_KEY,
  },
  transformResponse: function (response) {
    const transformedData = camelizeKeys(JSON.parse(response));
    return transformedData;
  },
});

export default request;
