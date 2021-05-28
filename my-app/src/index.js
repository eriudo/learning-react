import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81l1UM7a4bS._AC_UL200_SR200,200_.jpg",
    title: "American Marxism",
    author: "Mark R. Levin",
  },
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg",
    title: "The Four Agreements: A Practical Guide to Personal Freedom ",
    author: "Don Miguel Ruiz",
  },
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/713XUMrojkL._AC_UL200_SR200,200_.jpg",
    title:
      "What Happened to You?: Conversations on Trauma, Resilience, and Healing",
    author: "Oprah Winfrey",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1> {title} </h1>
      <h4> {author} </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
