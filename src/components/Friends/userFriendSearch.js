import {useState, useEffect} from 'react';
import * as api from '../../api';

export function UserFriendSearch(myID) {
    const [userInfos, setUserInfos] = useState();
    const [searchFriends, setSearchFriends] = useState(myID);

    useEffect(() =>{

        const fetchData = async () => {
            try {
                const rawData = await api.get('/friendship', searchFriends);
                const resp = await rawData.json();
                console.log('to json big->', resp);
                console.log('to json ->', resp);
                setUserInfos(resp);
            } catch (e) {
                console.log(e);
            }
        };
        fetchData();
    }, [searchFriends]); // to re-execute -> setSearchParam will change the searchParams and hook will be rerun
    //setSearchParams is to refresh the new search
    return [userInfos, searchFriends, setSearchFriends];
}