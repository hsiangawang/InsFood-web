import React, {Component} from 'react';
import {API_ROOT} from "../../constants";
import {Button, message} from "antd";

class Unlike_button extends Component {

    handleUnlike = e => {
        e.preventDefault();
        console.log("Unlike user id ->",document.cookie);
        console.log("Unliked restaurant ->", this.props.restaurant_info[0]);
        fetch(`${API_ROOT}/likelist`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                headers: { 'Content-Type': 'application/json' },
                user_name: document.cookie,
                restaurant_name: this.props.restaurant_info[0],
            }),
        })
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error(response.stateText);
            })
            .then((data) => {
                this.props.refresh(this.props.restaurant_info);
                console.log(data);
                message.success('Un-Liked');
            })
            .catch((err) => {
                console.error(err);
                message.error('Fail Un-Like');
            });
    }

    render() {
        return (
            <div className='Unlike-button'>
                <Button type="primary" shape="circle" icon="dislike" onClick={this.handleUnlike}/>
                {/*<i className="far fa-heart fa-2x"></i>*/}
            </div>
        );
    }
}

export default Unlike_button;