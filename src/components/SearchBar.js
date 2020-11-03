import React, {useState} from 'react';


export function SearchBar(props){
    const [term, setTerm] = useState(props.term || '');
    // const [location, setLocation] = useState(props.location || '');

    function submit(e) {
        if(typeof props.search === "function") {
           props.search(term);
        }
        console.log(term);
        e.preventDefault();
    }

    return (
        <form onSubmit={submit}>
            <div className="field has-addons search-bar">
                <div className="control">
                    <input className="input input-control"
                           onChange={(e) => setTerm(e.target.value)}
                           type="text"
                           value={term}
                           placeholder="Find a Restaurant"/>
                </div>
                <div className="control">
                    <div className="button search-button" onClick={submit}>
                        <span className="icon"><i className="fas fa-search"></i> </span>
                    </div>
                </div>
            </div>
        </form>
    );
}