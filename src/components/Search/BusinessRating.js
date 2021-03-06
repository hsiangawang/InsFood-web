import React, {Component} from 'react';
import Rating from 'react-rating';
class BusinessRating extends Component {
    render() {
        return (
            <div className='rating'>
                <Rating
                    emptySymbol="far fa-star fa-lg"
                    fullSymbol="fa fa-star fa-lg"
                    fractions={2}
                    initialRating={this.props.rates}
                    readonly
                />
                <div className='reviews'>
                    <p>{this.props.viewers} Reviews</p>
                </div>
                
                
            </div>
        );
    }
}

export default BusinessRating;