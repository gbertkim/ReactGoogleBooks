import React, { Component } from 'react';
import Search from './Search/Search.js';
import Filter from './Filter/Filter.js';
import FilterPrint from './FilterPrint/FilterPrint.js';
import BookList from './BookList/BookList.js';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchWord: '',
      searchFilter: 'all',
      printType: 'all',
      error: null,
    };
  }

  getBooks = () => {
    const API = 'https://www.googleapis.com/books/v1/volumes?q=';
    const search = this.state.searchWord;
    const filter = '&filter=' + this.state.searchFilter;
    const print = '&printType=' + this.state.printType;
    let url = '';
    if(this.state.searchFilter === 'all'){
      url = API + search + print;
    } else {
      url = API + search + filter + print;
    };
    const options = {
      method: 'GET',
      headers: {
        "key": "AIzaSyA1igC8UI3Ud2pAW-qstEImhEPLB7N5XGo",
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data
        })
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
      console.log(url);
  }

  handleEvent = (event) => {
    this.setState({
        searchWord: event.target.value
    });
    event.key === 'Enter' && this.getBooks();
  }

  handleFilter = (filter) => {
    this.setState({
      searchFilter: filter
    });
    console.log(this.state.searchFilter);
  }

  handleFilterPrint = (print) => {
    this.setState({
      printType: print
    });
    console.log(this.state.printType);
  }

  render() {

    return (
      <div className="App">
        <h3 id="appTitle">Google Book Search</h3>
        <Search 
          searchResults={this.getBooks}
          searchWord={this.handleEvent}
        />
        <div className="filterSelectors">
          <FilterPrint 
            handleFilterPrint={this.handleFilterPrint}
          />
          <Filter
            handleFilter={this.handleFilter}
          />
        </div>
        <BookList 
          bookList={this.state.books.items}
        />
      </div>
    );
  }
}

export default App;