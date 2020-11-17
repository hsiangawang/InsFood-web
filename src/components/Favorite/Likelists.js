import React, {Component} from 'react';
import {API_ROOT} from "../../constants";
import FriendCards from "../Friends/FriendCards";
import Unlike_Component from "./Unlike_Component";

class Likelists extends Component {
    state = {
        restaurantInfos: [],
        myID: document.cookie,
    }

    componentDidMount() {
        fetch(`${API_ROOT}/likelist/${this.state.myID}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then((data) => {
                // console.log('1',data);
                this.setState({restaurantInfos: data})
                // return data;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    refreshRestaurants = RList => this.setState({userInfos: RList});

    render() {
        const searchLikeRestaurant = this.state.restaurantInfos.slice(0, 10).map(b => <Unlike_Component key={b[0]+b[10]} bn={b} refresh={this.refreshRestaurants}/>)
        return (
            <div className="search-area">
                {searchLikeRestaurant}
            </div>
        );
    }
}

export default Likelists;