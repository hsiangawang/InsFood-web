import React, {Component} from 'react';

import Result from './Comp_result';

class SearchResults extends Component {
    render() {
        return (
            <div className='search-results'>
                <Result/>
                <Result/>
                <Result/>
                <Result/>
            </div>
        );
    }
}

export default SearchResults;