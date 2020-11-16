import React, {useEffect, useState} from 'react';
import {SearchBar} from "./SearchBar";
import {SearchResults} from "./Search/SearchResults";
import {useBusinessSearch} from "../useBusinessSearch";
import AllBusiness from "./Search/AllBusiness";


export function Home(props) {
    const [term, setTerm] = useState(props.term || '');
    // to set user location
    const [businesses, amountResults, searchParams, setSearchParams] = useBusinessSearch(term);

    function search(term) {
        setTerm(term);
        setSearchParams(term);
    }

    return (
        <div className="search-area">
            <SearchBar search={search} placeholder='Find a Restaurant'/>
            {
                term ? <SearchResults businesses={businesses}/> : <AllBusiness/>
            }
        </div>
       );
}