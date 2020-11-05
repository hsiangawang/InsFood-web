import React, {Component, useState} from 'react';

import Result from './Comp_result';

export function SearchResults(props){

    if(!props.businesses || !props.businesses.length) {
        const searchAll = props.allbusinesses.slice(0, 10).map(b => <Result key={b[0]+b[10]} bn={b}/>)
        return (
            <div className='search-results'>
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
