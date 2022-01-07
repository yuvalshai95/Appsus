import {LongTxt} from '../cmps/LongTxt.jsx';
import {bookService} from '../services/book.service.js';

export class BookDetails extends React.Component {
  state = {
    book: null,
    isLongTxtShown: false,
  };

  componentDidMount() {
    this.loadBook();
  }

  loadBook = () => {
    const {bookId} = this.props.match.params;
    bookService.getBookById(bookId).then(book => {
      // bookId is undefined send user back to home page
      if (!book) return this.props.history.push('/');
      this.setState({book});
    });
  };

  toggleReadMore = () => {
    this.setState({isLongTxtShown: !this.state.isLongTxtShown});
  };

  onBackToBookList = () => {
    this.props.history.push('/book');
  };

  renderRow(title, content, className = '') {
    return (
      <p>
        <span className={`${className}`}>{title}: </span>
        {content}
      </p>
    );
  }

  render() {
    if (!this.state.book) return <h1>Error</h1>;

    const {title, thumbnail, subtitle, authors, listPrice, categories, language, publishedDate, description} =
      this.state.book;

    const currency = bookService.getCurrencySymbol(listPrice.currencyCode);
    let bookPublishedDate = bookService.getPublishedTime(publishedDate);
    let readingDuration = bookService.getReadingTime();
    let priceRangeClass;

    if (listPrice.amount > 150) {
      priceRangeClass = 'red-price';
    } else if (listPrice.amount < 20) {
      priceRangeClass = 'green-price';
    } else {
      priceRangeClass = '';
    }

    return (
      <React.Fragment>
        <div className="book-details-content main-layout">
          <img className="book-details-img" src={`${thumbnail}`} />
          <div className="book-details-text">
            <h1 className="book-details-title">{title}</h1>
            <h2 className="book-detials-subtitle">{subtitle}</h2>
            {this.renderRow('Written By', authors.join(', '))}
            {this.renderRow('Price', `${currency}${listPrice.amount}`, priceRangeClass)}
            {this.renderRow('Book Type', `${bookPublishedDate}`)}
            {this.renderRow('Categories', categories.join(', '))}
            {this.renderRow('Language', `${language.toUpperCase()}`)}
            {this.renderRow('Publish Date', `${publishedDate}`)}
            {this.renderRow('Reading Duration', `${readingDuration}`)}
            {listPrice.isOnSale && <img src="../../../assets/img/sale.png" />}
            <LongTxt text={description} isLongTxtShown={this.state.isLongTxtShown} />

            <div className="book-details-btns">
              <button onClick={this.onBackToBookList} className="btn book-details-back-btn">
                Go Back
              </button>

              {description.length > 100 && (
                <button className="btn" onClick={this.toggleReadMore}>
                  {this.state.isLongTxtShown ? 'Show Less' : 'Read More'}
                </button>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
