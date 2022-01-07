import {bookService} from '../apps/book/services/book.service.js';
import {BookList} from '../apps/book/cmps/BookList.jsx';
import {BookFilter} from '..//apps/book/cmps/BookFilter.jsx';
import {BookAdd} from '../apps/book/cmps/BookAdd.jsx';

export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
  };

  componentDidMount() {
    this.loadBooks();
    window.scrollTo(0, 0);
  }

  loadBooks = () => {
    const {filterBy} = this.state;
    bookService.query(filterBy).then(books => {
      this.setState({books});
    });
  };

  onSetFilter = filterBy => {
    this.setState({filterBy}, this.loadBooks);
  };

  render() {
    const {books} = this.state;
    if (!books) return <h1>NO BOOKS !</h1>;
    return (
      <section className="book-app">
        <div className="filter-container">
          <BookFilter onSetFilter={this.onSetFilter} />
          <BookAdd loadBooks={this.loadBooks} loadBooks={this.loadBooks} />
        </div>
        <BookList books={books} />
      </section>
    );
  }
}
