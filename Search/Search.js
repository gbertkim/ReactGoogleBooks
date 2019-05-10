import React, { Component } from 'react';
import './search.css';

class Search extends Component {

  render() {
    return (
        <div className="searchBar">
            <label id="searchLabel" for="search">Search:</label>
            <input id="searchInput"
                placeholder="Search Google Books"
                type="text"
                onChange ={(event) => this.props.searchWord(event)}
            />
            <button id="searchButton" onClick={this.props.searchResults}>
                Search
            </button>
        </div>
    );
  }
}

export default Search;
