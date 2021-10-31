import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { FaStar } from "react-icons/fa";

let books = {
  title: "Mido the  King",
  author: "mido",
  img: "https://upload.wikimedia.org/wikipedia/ar/9/98/%D8%A3%D8%B1%D8%B6_%D8%B2%D9%8A%D9%83%D9%88%D9%84%D8%A7.jpg",
  currentRate: 5,
  description:
    "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.",
};

function BookCard({book}) {
  const [rating, setRating] = useState(book.currentRate);
  const [starHover, setStarHover] = useState(null);

  return (
    <div className="book-card">
      <div className="content-wrapper">
        <img className="book-card-img" src={book.img} alt="book" />
        <div className="card-content">
          <div className="book-name">{book.title}</div>
          <div className="book-by">{book.author}</div>
          <div className="rate">
            <div className="rating book-rate">
              {
                //Five stars Rating bar
                [...Array(5)].map((star, i) => {
                  const ratingValue = i + 1;
                  return (
                    <label className="full">
                      <input
                        class="star-input"
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                      />
                      <FaStar 
                        size={15}
                        className="rating-star"
                        color={
                          ratingValue <= (starHover || rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        onMouseEnter={() => setStarHover(ratingValue)}
                        onMouseLeave={() => setStarHover(null)}
                      />
                    </label>
                  );
                })
              }
              <span class="book-voters card-vote">(1.987 voters)</span>
            </div>
          </div>
          <div class="book-sum card-sum">{book.description}</div>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
