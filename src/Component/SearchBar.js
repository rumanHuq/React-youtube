import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(prop){
        super(prop);
        this.state = {term:''};
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term); //--->Note
    }
    render() {
        return (
            <div className = 'search-bar'>
                <input value={this.state.term}
                    onChange = {event=>{this.onInputChange(event.target.value)}}
                    placeholder = ' Search...'
                />
            </div>
        );
    }
}

export default SearchBar;

/*
    Refer to main.js NOTE for clarity in BANGLA/BENGALI:
    main.js e <SearchBar onSearchTermChange= {term=>this.videoSearch(term)}/>
    korate property asole videosearch function. videosearch function invoke automatic jokhon onsearchterm invoke hoibo
    videosearch function technically invoked, but jehetu onsearchterm call hoise ei page e so ultimately videosearch invoke eikhanei hoise
    term param e input field er value dhukse 
 */