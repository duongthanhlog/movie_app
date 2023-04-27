import axios from "axios";
import { camelizeKeys } from "humps";

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-Type': `Authorization: Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
    },
    transformResponse : function (response) {
        const transformedData = camelizeKeys(JSON.parse((response)))
        return transformedData;
    }
});


export default request