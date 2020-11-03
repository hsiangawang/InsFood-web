import React, {Component, useState} from 'react';
import {GetAllBusiness} from './getAllBusiness';

import Result from './Comp_result';
import * as api from "../../api";
import {API_ROOT} from "../../constants";

export function SearchResults(props){

    // try {
    //     const rawData = api.getAll('/restaurants');
    //     console.log('all rawData->', rawData);
    //     const resp = rawData.response;
    //     console.log('all repsonse',resp);
    //     console.log('to json ->', resp);
    //     setAllBusiness(resp);
    // } catch (e) {
    //     console.log(e);
    // }

    if(!props.businesses || !props.businesses.length) {
        const searchAll = props.allbusinesses.slice(0, 10).map(b => <Result key={b[0]+b[10]} bn={b}/>)
        return (
            <div>
                {searchAll}
            </div>
        );
    }
    const searchResults = props.businesses.map(b => <Result key={b[0]+b[10]} bn={b}/>)
    return (
        <div className='search-results'>
            {searchResults}
        </div>
    );
}
