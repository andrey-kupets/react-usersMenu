import * as url from "url";

function useFetch(url) {
    const baseUrl = 'https://jsonplaceholder.typicode.com';
    return fetch(baseUrl + url).then(response => response.json());
}
module.exports.useFetch = useFetch;