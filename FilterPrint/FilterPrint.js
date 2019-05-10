import React, { Component } from 'react';
import '../Filter/filter.css';
class FilterPrint extends Component {

  render() {
    return (
      <div className="filterPrint_selector">
        <form>
          <label className="filterTitle" htmlFor="filterPrintType">Print Type:</label>
          <select
            id="filterPrintType"
            className="filterSelector"
            name="filterPrintType"
            onChange={event => this.props.handleFilterPrint(event.target.value)}>
            <option value="all">All</option>
            <option value="Books">Books</option>
            <option value="Magazines">Magazines</option>
          </select>
        </form>
      </div>
    );
  }
}

export default FilterPrint;