import React, {Component} from 'react';
import Result from "../Search/Comp_result";
import UnFollowCompCard from "./UnFollow_Comp_card";
import {API_ROOT} from "../../constants";

class FriendCards extends Component {
    state = {
        userCards: '',
        userInfos:''
    }

    stateChange (){
        fetch(`${API_ROOT}/friendship/${document.cookie}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((response) => {
                if (response.ok) {
                    return response.text();
                }
                throw new Error(response.statusText);
            })
            .then((data) => {
                // console.log('1',data);
                // this.setState({userInfos:JSON.parse(data)});
                let i = JSON.parse(data);
                console.log('userInfos Update ->', i);
                // return data;
            })
            .catch((err) => {
                console.error(err);
            });
    };

    // stateChange = () => {
    //     this.forceUpdate();
    //     this.props.reSet(document.cookie);
    //     console.log("refreshed")
    // }

    render() {
        let cards = null;
        if (this.props.userInfos) {
            console.log('This is props users ->', this.props.userInfos);
            cards = this.props.userInfos.map(b => <UnFollowCompCard key={b[0]} userInfo={b} stateChange={this.stateChange}/>)
        }
        if (this.state.userInfos) {
            cards = this.state.userInfos.map(b => <UnFollowCompCard key={b[0]} userInfo={b} stateChange={this.stateChange}/>)
        }
        return (
            <div className='friend-result'>
                {cards}
            </div>
        );
    }
}

export default FriendCards;

//  export function FriendCards(props){
//     console.log('this is a ->',props.userInfos);
//     let userCards = null;
//     if (props.userInfos) {
//         userCards = props.userInfos.map(b => <UnFollowCompCard key={b[0]} userInfo={b}/>)
//     }
//     return (
//         <div className='friend-result'>
//             {userCards}
//         </div>
//     );
// }
//
// export default FriendCards;