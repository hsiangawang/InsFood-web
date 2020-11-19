import {useState, useEffect} from 'react';
import * as api from './api';

export function useTagRecommend(term) {
    const [businesses, setBusinesses] = useState([]);
    const [searchParams, setSearchParams] = useState(term);

    useEffect(() =>{
        setBusinesses([]);
        const fetchData = async () => {
            try {
                const rawData = await api.get('/search', searchParams);
                const resp = await rawData.json();
                console.log('to json ->', typeof resp);
                console.log('to json ->', resp);
                setBusinesses(resp);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [searchParams]); // to re-execute -> setSearchParam will change the searchParams and hook will be rerun
    //setSearchParams is to refresh the new search
    return [businesses, searchParams, setSearchParams];
}