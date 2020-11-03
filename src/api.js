import {API_ROOT} from "./constants";
import queryString from "query-string";

export function get(path,restaurant_name) {
    // const query = queryString.stringify(restaurant_name);
    const query = encodeURI(restaurant_name);
    console.log('input in get ->', query);
    const url = `${API_ROOT}${path}/${query}`;
    return fetch(`${API_ROOT}${path}/${query}`, {
        method: 'GET',
        mode: 'cors',
        Origin: 'localhost',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
    });
}

export function getAll(path) {
    return fetch(`${API_ROOT}${path}`, {
        method: 'GET',
        mode: 'cors',
        Origin: 'localhost',
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
    });
}