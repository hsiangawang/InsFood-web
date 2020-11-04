import React, {Component} from 'react';

class RestaurantThumbnail extends Component {
    render() {
        return (
            <div className='RestaurantThumbnail'>
                <div className='restaurant-container'>
                    <a href={this.props.url}>
                        <img src={this.props.picture_url} height="100px" width="100px" />
                    </a>
                    <div>
                        Name: {this.props.name}
                    </div>
                    <div>
                        Liked: {this.props.like}
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantThumbnail;