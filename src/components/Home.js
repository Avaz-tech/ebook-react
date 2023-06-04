import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./NavigationBar";
import "./../styles/Home.css";
import ThemeSelector from "./ThemeSelector";

//Import Firebase config file
import { projectFirestore } from "../firebase/config";

const Home = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {

    projectFirestore
      .collection("books")
      .get()
      .then((snapshot) => {
        let bookData = [];

        snapshot.docs.forEach((doc) => {
          bookData.push({ id: doc.id, ...doc.data() });
        });
        setBooks(bookData);
        setFilteredBooks(bookData);
      });

      console.log(books);

    // Fetch books from server
    // fetch('http://localhost:4002/books')
    //   .then(response => response.json())
    //   .then(data => {
    //     setBooks(data);
    //     setFilteredBooks(data);
    //   })
    //   .catch(error => console.error(error));
  }, [query]);

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Filter books by title or author
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.author.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(filtered);
  };

  function handleMoreClick() {
    navigate("/book-info");
  }
  return (
    <>
      <NavigationBar />
      <ThemeSelector />
      <div className="library-container">
        <Form className="mb-3">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search for a book by title or author"
              value={query}
              onChange={handleQueryChange}
              className="search-input"
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSearch}>
            Search
          </Button>
        </Form>
        <div className="books-container">
          {filteredBooks.map((book) => (
            <Card key={book.id} style={{ width: "18rem", margin: "10px" }}>
              <Card.Img variant="top" src={book.coverImageUrl} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {book.author}
                </Card.Subtitle>
                <Button variant="primary">Download</Button>
                <button onClick={handleMoreClick} className="hidden-text">
                  More
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
