import React, {Component} from 'react';
import UnFollowCompCard from "./UnFollow_Comp_card";

class FriendCards extends Component {
    state = {
        userInfos: this.props.userInfos
    }

    stateChange = user_Delete => {
        let newFriendList = this.props.userInfos;
        let index = newFriendList.indexOf(user_Delete);
        if (index > - 1) {
            newFriendList.splice(index,1);
        }
        this.props.refresh(newFriendList);
    }

    render() {
        let cards = null;
        if (this.props.userInfos) {
            console.log('This is props users ->', this.props.userInfos);
            cards = this.props.userInfos.map(b => <UnFollowCompCard key={b[0]} userInfo={b} refresh={this.stateChange}/>)
        }
        return (
            <div className='friend-result'>
                {cards}
            </div>
        );
    }
}

export default FriendCards;

