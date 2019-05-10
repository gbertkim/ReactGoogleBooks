import React, { Component } from 'react';
import Book from '../Book/Book.js'


class BookList extends Component {
    render() {
      console.log(this.props.bookList)
      let summary;
      if (this.props.bookList !== undefined){
        summary = 
        Object.keys(this.props.bookList).map(key => 
            <Book 
                key={key}
                id={key}
                title={this.props.bookList[key].volumeInfo.title}
                author={this.props.bookList[key].volumeInfo.authors}
                description={this.props.bookList[key].volumeInfo.description}
                thumbnail={this.props.bookList[key].volumeInfo.imageLinks.thumbnail}
                price={this.props.bookList[key].saleInfo.retailPrice}
            />
        )
      }
    
    return (
        <div className="summarySection">
            {summary}
        </div>
    )
    }
}

export default BookList;

// Title, author, price, book image, description
