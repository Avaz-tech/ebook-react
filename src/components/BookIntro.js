import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import "./../styles/BookIntro.css";

//Import Firebase config file
import { projectFirestore } from "../firebase/config";

const BookIntro = () => {
  const[bookInfo, setBookInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    projectFirestore
      .collection("books")
      .doc(id)
      .get()
      .then((doc) => {
        if(doc.exists){
          setBookInfo(doc.data());
        }
      });
  }, [id]);

  return (
    <>
      <NavigationBar />
      <div className="intro-container">
        <div className="img-container a">
          <img
            className="cover-image"
            src={`${bookInfo.coverImageUrl}`}
            alt=""
          />
        </div>
         <ul className="book-inf b">
          <li className="book-title">{bookInfo.title}</li>
          <li>
            By: <span>{bookInfo.author}</span>
          </li>
          <li>
            Released: <span>{bookInfo.releaseDate}</span>
          </li>
          <li>
              Publishers: <span>Penguin: Avery</span>
          </li>
          <li>
            ISBN: <span>9780735211292</span>{" "}
          </li>
        </ul> 
        <button className="read c">Read</button>
        <button className="download d">Download</button>
        <div className="description e">
          <h3 className="description-header">Book Description</h3>
          <p className="content">
           {bookInfo.about}
          </p>
        </div>
      </div>
    </>
  );
};

export default BookIntro;
