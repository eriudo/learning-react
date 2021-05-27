import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <MyTitle />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/81l1UM7a4bS._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);

const MyTitle = () => <h1> American Marxism</h1>;

const Author = () => (
  <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
    Mark R. Levin
  </h4>
);
ReactDom.render(<BookList />, document.getElementById("root"));
