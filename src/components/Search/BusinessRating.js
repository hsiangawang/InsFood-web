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
                    initialRating={4.5}
                    readonly
                />
                <p>1128 Reviews</p>
            </div>
        );
    }
}

export default BusinessRating;