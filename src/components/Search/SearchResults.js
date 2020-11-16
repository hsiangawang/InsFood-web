import React, {Component, useState} from 'react';

import Result from './Comp_result';

export function SearchResults(props){

    if(!props.businesses || !props.businesses.length) {
        return (
            <div className='search-results'>
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
