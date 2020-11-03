import React, {Component, useEffect, useState} from 'react';
import logo from '../assets/images/logo.png';
import {SearchBar} from "./SearchBar";
import {SearchResults} from "./Search/SearchResults";
import {useBusinessSearch} from "../useBusinessSearch";
import {GetAllBusiness} from "./Search/getAllBusiness";
import Result from "./Search/Comp_result";
import {API_ROOT} from "../constants";
import {message} from "antd";
import * as api from "../api";


export function Home(props) {
    const [term, setTerm] = useState(props.term || '');
    // to set user location
    // const location = '';
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term);

    const [allBusiness, setAllBusiness] = useState([]);

    (function searchAll (){
        fetch(`${API_ROOT}/restaurants`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error(response.statusText);
            })
            .then((data) => {
                // console.log('1',data);
                setAllBusiness(JSON.parse(data));
                // return data;
            })
            .catch((err) => {
            console.error(err);
        });
    })();

    // console.log("1->",businesses);
    function search(term) {
        setTerm(term);
        setSearchParams(term);
    }

    return (
        <div className="search-area">
            <SearchBar search={search}/>
            <SearchResults businesses = {businesses} allbusinesses = {allBusiness}/>
        </div>
       );
}