import {useState, useEffect} from 'react';
import * as api from '../../api';

export function UserSearch(myID) {
    const [userInfo, setUserInfo] = useState();
    const [searchParams, setSearchParams] = useState(myID);

    useEffect(() =>{
        // let mounted = true;
        // if (mounted) {
        //     const fetchData = async () => {
        //         try {
        //             const rawData = await api.get('/user', searchParams);
        //             const resp = await rawData.json();
        //             console.log('to json big->', resp);
        //             console.log('to json ->', resp[0]);
        //             setUserInfo(resp[0]);
        //         } catch (e) {
        //             console.log(e);
        //         }
        //     };
        //     fetchData();
        // }
        // // return () => mounted = false;
        const fetchData = async () => {
            try {
                const rawData = await api.get('/user', searchParams);
                const resp = await rawData.json();
                console.log('to json big->', resp);
                console.log('to json ->', resp[0]);
                setUserInfo(resp[0]);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [searchParams]); // to re-execute -> setSearchParam will change the searchParams and hook will be rerun
    //setSearchParams is to refresh the new search
    return [userInfo, searchParams, setSearchParams];
}