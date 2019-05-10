import React, { Component } from 'react';
import './book.css'
class Book extends Component {

  render() {
      const title = this.props && this.props.title ? this.props.title : null;
      const author = this.props.author && this.props.author[0] ? this.props.author[0] : null;
      const description = this.props && this.props.description ? this.props.description : null;
      const thumbnail = this.props && this.props.thumbnail ? this.props.thumbnail : null;
      const price = this.props.price && this.props.price.amount ? this.props.price.amount : null;
      return (
        <div className="bookDetails">
            <h2 className="bookTitle">{title}</h2>
            <div className="container">
                <div className="left">
                    <img className="bookPhoto" src = {thumbnail} alt="book cover"></img>
                </div>
                <div className="right">
                    <h3 className="author">{author}</h3>
                    <h3 className="price">Price: ${price}</h3>
                    <p className="bookDescription">{description}</p>
                </div>
            </div>
            {console.log(title)}
            {console.log(author)}
            {console.log(price)}
            {console.log(description)}
            {console.log(thumbnail)}
        </div>
    )
  }
}

export default Book;