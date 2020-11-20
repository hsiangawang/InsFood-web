import React, {Component} from 'react';
import {API_ROOT} from "../../constants";
import Result from "../Search/Comp_result";

class ReccomendLists extends Component {

    state = {
        restaurantInfos: [],
        myID: document.cookie,
    }

    componentDidMount() {
        fetch(`${API_ROOT}/friendzoneRecommend/${this.state.myID}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                if (response.ok) {
                    console.log('response->',response);
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((data) => {
                console.log('1',data);
                this.setState({restaurantInfos: data})
                // return data;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {

        const searchAll = this.state.restaurantInfos.map(b => <Result key={b[0]+b[10]} bn={b}/>);

        return (
            <div className="search-area">
                <h2> Restaurant Recommendation Based On Your FriendZone</h2>
                {searchAll}
            </div>
        );
    }
}

export default ReccomendLists;