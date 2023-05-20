import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import "./../styles/BookIntro.css";

export class BookIntro extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <div className="intro-container">
          <div className="img-container a">
            <div>
              <img src="" alt="" />
            </div>
          </div>
          <ul className="book-inf b">
            <li className="book-title">Atomic Habits</li>
            <li>
              By: <span>James Clear</span>
            </li>
            <li>
              Released: <span>October 16, 2018</span>
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
              No matter your goals, Atomic Habits offers a proven framework for
              improving–every day. James Clear, one of the world’s leading
              experts on habit formation, reveals practical strategies that will
              teach you exactly how to form good habits, break bad ones, and
              master the tiny behaviors that lead to remarkable results. If
              you’re having trouble changing your habits, the problem isn’t you.
              The problem is your system. Bad habits repeat themselves again and
              again not because you don’t want to change, but because you have
              the wrong system for change. You do not rise to the level of your
              goals. You fall to the level of your systems. Here, you’ll get a
              proven system that can take you to new heights. Clear is known for
              his ability to distill complex topics into simple behaviors that
              can be easily applied to daily life and work. Here, he draws on
              the most proven ideas from biology, psychology, and neuroscience
              to create an easy-to-understand guide for making good habits
              inevitable and bad habits impossible. Along the way, readers will
              be inspired and entertained with true stories from Olympic gold
              medalists, award-winning artists, business leaders, life-saving
              physicians, and star comedians who have used the science of small
              habits to master their craft and vault to the top of their field.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default BookIntro;
