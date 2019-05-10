import React, { Component } from 'react';
import './filter.css';

class Filter extends Component {

  render() {
    return (
      <div className="filter_selector">
        <form>
          <label className="filterTitle" htmlFor="filter">Book Type:</label>
          <select
            id="filter"
            className="filterSelector"
            name="filter"
            onChange={event => this.props.handleFilter(event.target.value)}>
            <option value="all">All</option>
            <option value="free-ebooks">Free e-books</option>
            <option value="paid-ebooks">Paid e-books</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Filter;