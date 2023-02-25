import React from "react";
import { ThemeContext } from "../contexts/ThemeContext";
class BookList extends React.Component {
  // static contextType = ThemeContext;

  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <div
              className="book-list"
              style={{ color: theme.syntax, background: theme.bg }}
            >
              <ul>
                <li style={{ background: theme.ui }}>Book1</li>
                <li style={{ background: theme.ui }}>Book2</li>
                <li style={{ background: theme.ui }}>Book3</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
