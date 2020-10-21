import React, {Component} from 'react';
import BusinessRating from "./BusinessRating";

class CompResult extends Component {
    render() {
        return (
            <div className='search-result'>
                <img src='https://via.placeholder.com/160' alt='business' className='business-image'/>
                <div className='business-info'>
                    <h2 className="subtitle">Tasty Tart</h2>
                    <BusinessRating/>
                    <span className="tag">Tart</span> <span className="tag">Tasty</span>
                </div>
                <div className='contact-info'>
                    <p>(+1)21760060000</p>
                    <p>First Street 5</p>
                    <p>61820 IL, USA</p>
                </div>
                <div className='like-button'>
                    <i className="far fa-heart fa-2x"></i>
                </div>
            </div>
        );
    }
}

export default CompResult;