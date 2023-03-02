import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

const BookList = () => {
  const { theme } = useContext(ThemeContext);
  const { isLightTheme, light, dark } = theme;
  const { books } = useContext(BookContext);
  const currTheme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: currTheme.syntax, background: currTheme.bg }}
    >
      <ul>
        {books.map((book) => (
          <li key={book.id} style={{ background: currTheme.ui }}>
            {book.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
