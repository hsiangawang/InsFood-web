import React, {Component} from 'react';
import BusinessRating from "./BusinessRating";

export function CompResult(props){
    if (!props.bn) {
        return (<div>No Matching Restaurants</div>);
    }

    const tags = props.bn[1].split(',').map(category => (<span className='tag' key={props.bn[1] + category}>{category}</span>));

    return (
        <div className='search-result'>
            <img src={props.bn[3]} alt='business' className='business-image'/>
            <div className='business-info'>
                <h2 className="subtitle"><a href={props.bn[2]} target="_blank">{props.bn[0]}</a></h2>
                <BusinessRating rates={props.bn[6]} viewers={props.bn[11]}/>
                {/*<span className="tag">Tart</span> <span className="tag">Tasty</span>*/}
                <p>{tags}</p>
            </div>
            <div className='contact-info'>
                <p>{props.bn[7]}</p>
                <p>{props.bn[8]}</p>
                <p>{props.bn[9]}</p>
            </div>
            <div className='like-button'>
                <i className="far fa-heart fa-2x"></i>
            </div>
        </div>
    );
}

export default CompResult;