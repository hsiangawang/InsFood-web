import React, {Component} from 'react';
import Result from './Comp_result';
import {API_ROOT} from "../../constants";

class AllBusiness extends Component {
    state = {
        allBusiness: []
    }

    componentDidMount() {
        fetch(`${API_ROOT}/restaurants`, {
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
                this.setState({allBusiness: data})
                // return data;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        const searchAll = this.state.allBusiness.slice(0, 10).map(b => <Result key={b[0]+b[10]} bn={b}/>)
        return (
            <div>
                {searchAll}
            </div>
        );
    }
}

export default AllBusiness;