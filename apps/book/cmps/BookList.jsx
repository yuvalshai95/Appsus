import {BookPreview} from './BookPreview.jsx';

export function BookList({books}) {
  if (!books) return <h1>There are no books to show</h1>;
  return (
    <div className="books-container main-layout">
      <div className="book-list">
        {books.map(book => (
          <BookPreview key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
