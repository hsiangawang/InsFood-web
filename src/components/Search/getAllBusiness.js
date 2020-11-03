import {useState, useEffect} from 'react';
import * as api from '../../api';

export function GetAllBusiness() {
    const [allBusiness, setAllBusiness] = useState([]);
    const [allBusinessCount, setAllBusinessCount] = useState();

    useEffect(() =>{
        setAllBusiness([]);
        const fetchData = async () => {
            try {
                const rawData = await api.getAll('/restaurants');
                const resp = await rawData.json();
                console.log('to json ->', resp);
                setAllBusiness(resp);
                setAllBusinessCount(resp.total);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }); // to re-execute -> setSearchParam will change the searchParams and hook will be rerun
    //setSearchParams is to refresh the new search
    return [allBusiness, allBusinessCount];
}