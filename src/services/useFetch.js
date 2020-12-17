import * as url from "url";

export default function useFetch(url) {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    return fetch(baseUrl + url).then(response => response.json());
}