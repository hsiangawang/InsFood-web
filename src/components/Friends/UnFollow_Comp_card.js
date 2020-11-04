import React, {Component} from 'react';
import RestaurantThumbnail from './RestaurantThumbnail';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, message} from 'antd';
import Result from "../Search/Comp_result";
import {API_ROOT} from "../../constants";
import {Link} from "react-router-dom";

class UnFollowCompCard extends Component {
    state = {
        nickName: this.props.userInfo
    };

    handleDisFollow = e => {
        e.preventDefault();
        if (document.cookie != this.props.userInfo) {
            console.log(document.cookie);
            console.log(this.nickName);
            fetch(`${API_ROOT}/friendship`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    headers: { 'Content-Type': 'application/json' },
                    user1_name: document.cookie,
                    user2_name: this.state.nickName,
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.text();
                    }
                    throw new Error(response.stateText);
                })
                .then((data) => {
                    this.props.stateChange();
                    console.log(data);
                    message.success('Un-Followed');
                })
                .catch((err) => {
                    console.error(err);
                    message.error('Fail Un-Follow');
                });
        }
    }

    render() {
        let nickName = null;
        console.log('This is props.b1:->',this.props.userInfo);
        if (this.props.userInfo) {
            console.log('This is props.b2:->',this.props.userInfo);
            nickName = this.props.userInfo;
        }
        return (
            <div className='Card'>
                <div className='upper-container'>
                    <div className="container">
                        <div className="row">
                            <div className="col align-self-center">
                                <h4 className="user_Name">{nickName}</h4>
                                {/*<h4 className="user_Name">{typeof props.userInfo}</h4>*/}
                                {/*<img className="userImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" height="100px" width="100px" />*/}
                            </div>
                            <Button type="danger" shape="circle" icon="minus" onClick={this.handleDisFollow}/>
                            {/*<Button type="primary">Follow</Button>*/}
                        </div>
                    </div>
                </div>
                <div className='lower-container'>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <RestaurantThumbnail name="black dog"
                                                     picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="23"/>
                            </div>
                           <div className="col">
                                <RestaurantThumbnail name="white dog"
                                                     picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                            </div>
                            <div className="col">
                                <RestaurantThumbnail name="white dog"
                                                     picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <RestaurantThumbnail name="white dog"
                                                     picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                            </div>
                            <div className="col">
                                <RestaurantThumbnail name="black dog"
                                                     picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="23"/>
                            </div>
                            <div className="col">
                                <RestaurantThumbnail name="white dog"
                                                     picture_url="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/BBQ_Lamb.jpg/220px-BBQ_Lamb.jpg" like="20"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UnFollowCompCard;