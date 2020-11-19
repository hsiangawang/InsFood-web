import React, {Component} from 'react';

class RestaurantThumbnail extends Component {
    render() {
        return (
            <div className="restaurant-col">
                <div className='RestaurantThumbnail'>
                    <div className='restaurant-container'>
                        <a href={this.props.url} target="_blank">
                            <img src={this.props.picture_url} alt='business' className='recommend-image'/>
                        </a>
                        <div className='restaurant-name'>
                            {this.props.name}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantThumbnail;