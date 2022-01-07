import {bookService} from '../services/book.service.js';
const {Link} = ReactRouterDOM;
export function BookPreview({book}) {
  const currency = bookService.getCurrencySymbol(book.listPrice.currencyCode);
  const {title, thumbnail, listPrice} = book;

  return (
    <Link to={`/book/${book.id}`}>
      <div className="book-preview">
        <h3 className="book-preview-title">{title}</h3>
        <img className="book-preview-img" src={`${thumbnail}`} />
        <p className="book-preview-price">
          {currency}
          {listPrice.amount}
        </p>
      </div>
    </Link>
  );
}
