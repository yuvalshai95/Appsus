export function GoogleBooksPreview({book, onAddBook, onClearForm}) {
  return (
    <li className="google-book-preview">
      {book.volumeInfo.title}
      <i
        className="fas fa-book-medical google-book-add"
        onClick={() => {
          onAddBook(book);
          onClearForm();
        }}></i>
    </li>
  );
}
