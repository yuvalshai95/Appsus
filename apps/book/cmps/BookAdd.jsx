import {bookService} from '../services/book.service.js';
import {AddBookList} from './AddBookList.jsx';
import {eventBusService} from '../../../services/event-bus.service.js';
const {Link} = ReactRouterDOM;

export class BookAdd extends React.Component {
  state = {
    bookName: '',
    booksToShow: null,
  };

  handleChange = ({target}) => {
    const value = target.value;
    if (!value) this.setState({bookName: ''});
    else {
      this.setState({bookName: value}, () => {
        this.setBooksToShow(value);
      });
    }
  };

  setBooksToShow = bookName => {
    bookService.getGoogleBooksByName(bookName).then(books => {
      this.setState({booksToShow: books});
    });
  };

  onAddBook = book => {
    bookService.addGoogleBook(book).then(() => {
      // eventBusService.emit('user-msg', {
      //   txt: 'Book Added !',
      //   type: 'success',
      //   link: <Link to={`book/${book.id}`}>click here to check out the book !</Link>,
      // });
      this.props.loadBooks();
    });
  };

  onClearForm = () => {
    this.setState(prevState => ({...prevState, bookName: ''}));
  };

  render() {
    const {bookName, booksToShow} = this.state;
    return (
      <div className="add-book flex">
        <div className="add-book-title">Add New Book: </div>

        <form>
          <input
            type="text"
            id="add-book"
            value={bookName}
            onChange={this.handleChange}
            placeholder="Search By Name..."
          />
        </form>
        {booksToShow && bookName && (
          <AddBookList onAddBook={this.onAddBook} books={booksToShow} onClearForm={this.onClearForm} />
        )}
      </div>
    );
  }
}
