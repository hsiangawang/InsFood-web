import React, {Component} from 'react';
import RestaurantThumbnail from './RestaurantThumbnail';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, message} from 'antd';
import Result from "../Search/Comp_result";
import {API_ROOT} from "../../constants";

export function CompCard(props){
    let nickName = null;
    if (props.userInfo) {
        nickName = props.userInfo[3];
    }

    let handleFollow = e => {
        e.preventDefault();
        if (document.cookie != props.userInfo[1]) {
            console.log(document.cookie);
            console.log(nickName);
            fetch(`${API_ROOT}/friendship`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    headers: { 'Content-Type': 'application/json' },
                    user1_name: document.cookie,
                    user2_name: props.userInfo[1],
                }),
            })
                .then((response) => {
                    if (response.ok) {
                        return response.text();
                    }
                    throw new Error(response.stateText);
                })
                .then((data) => {
                    console.log(data);
                    message.success('Followed');
                })
                .catch((err) => {
                    console.error(err);
                    message.error('Fail To Follow');
                });
        }
    }

    return (
        <div className='Card'>
            <div className='upper-container'>
                <div className="container">
                    <div className="row">
                        <div className="col align-self-center">
                            <h4 className="user_Name">{props.userInfo[3]}</h4>
                            {/*<h4 className="user_Name">{typeof props.userInfo}</h4>*/}
                            {/*<img className="userImage" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/1200px-Tux.svg.png" height="100px" width="100px" />*/}
                        </div>
                        {

                        }
                        <Button type="danger" shape="circle" icon="plus" onClick={handleFollow}/>
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


export default CompCard;