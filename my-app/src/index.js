import React from "react";
import ReactDom from "react-dom";

function BookList() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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

const Author = () => <h1>Mark R. Levin</h1>;
ReactDom.render(<BookList />, document.getElementById("root"));
