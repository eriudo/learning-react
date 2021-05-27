import React from "react";
import ReactDom from "react-dom";
import "./index.css";

const title = "American Marxism";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/81l1UM7a4bS._AC_UL200_SR200,200_.jpg";
const author = "Mark R. Levin";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1> {title} </h1>
      <h4> {author} </h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
