import React, {Component} from 'react';


class SearchBar extends Component {

    render() {
        return (
            <div className="field has-addons search-bar">
                <div className="control">
                    <input className="input input-control" type="text" placeholder="Find a Restaurant"/>
                </div>
                <div className="control">
                    <div className="button search-button">
                        <span className="icon"><i className="fas fa-search"></i> </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;