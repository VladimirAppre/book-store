import React, {Component} from "react";
import {connect} from 'react-redux';

import BookListItem from "../book-list-item/book-list-item";
import {withBookstoreService} from '../hoc';
import {booksLoaded, booksRequested} from '../../actions';
import {compose} from "../../utils";

import './book-list.css';
import Spinner from "../spinner";

class BookList extends Component {

  componentDidMount() {
    //полуаем данные
    const {bookstoreService, booksLoaded, booksRequested} = this.props;
    booksRequested();
    bookstoreService
      .getBooks()
      .then((data) => {
        //диспатчим новое событие в сторе
        return booksLoaded(data)
      });
  }

  render() {
    const {books, loading} = this.props;
    if(loading) {
      return <Spinner />
    }

    return (
      <ul className='book-list'>
        {
          books.map(book => {
            return (
              <li key={book.id}><BookListItem book={book}/></li>
            )
          })
        }
      </ul>
    )
  };
};

const mapStateToProps = ({books, loading}) => {
  return {books, loading};
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);


