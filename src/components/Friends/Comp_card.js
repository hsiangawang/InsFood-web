import React, {Component} from 'react';
import RestaurantThumbnail from './RestaurantThumbnail';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, message} from 'antd';
import Result from "../Search/Comp_result";
import {API_ROOT} from "../../constants";
import Unlike_Component from "../Favorite/Unlike_Component";

class CompCard extends Component{

    state = {
        friendID: this.props.userInfo[1],
        recommendInfos: []
    }
    // let nickName = null;
    // if (props.userInfo) {
    //     nickName = props.userInfo[3];
    // }

    async fetch() {
        fetch(`${API_ROOT}/tagRecommend/${document.cookie}/${this.props.userInfo[1]}`, {
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
                this.setState({recommendInfos: data, friendID: this.props.userInfo[1]});
                // console.log('2',this.state);
                // return data;
            })
            .catch((err) => {
                console.error(err);
            });
    }

    componentDidMount() {
        this.fetch();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userInfo !== this.props.userInfo) {
            this.fetch();
        }
    }


    handleFollow = e => {
        e.preventDefault();
        if (document.cookie != this.props.userInfo[1]) {
            console.log(document.cookie);
            console.log(this.state.nickName);
            fetch(`${API_ROOT}/friendship`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    headers: { 'Content-Type': 'application/json' },
                    user1_name: document.cookie,
                    user2_name: this.props.userInfo[1],
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

    render() {
        console.log('Infos->', this.state.friendID);
        console.log('tag Reccomend->', this.state.recommendInfos);
        const tagRecommandResult = this.state.recommendInfos.map(
            b => <RestaurantThumbnail key={b[0]+this.props.userInfo[1]} name={b[0]} picture_url={b[2]} url={b[1]}/>)
        return (
            <div className='Card'>
                <div className='upper-container'>
                    <div className="container">
                        <div className="row">
                            <div className="col align-self-center">
                                <h4 className="user_Name">{this.props.userInfo[3]}</h4>
                            </div>
                            <Button type="danger" shape="circle" icon="plus" onClick={this.handleFollow}/>
                        </div>
                    </div>
                </div>
                <div className='lower-container'>
                    <h5>Recommended By Your Most Like Restaurant Tag</h5>
                    <div className="rec-container">
                        {tagRecommandResult}
                    </div>
                </div>
            </div>
        );
    }
}
export default CompCard;