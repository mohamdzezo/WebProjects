import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { FaStar } from "react-icons/fa";

let books = {
    title: "Mido the  King",
    author: "mido",
    img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F07%2Fchances-are-1-2000.jpg&amp;q=85",
    currentRate: 5,
    description:
        "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.",
};

function BookCard() {

    const [book] = useState(books)
    const [rating, setRating] = useState(book.currentRate);

    return (
        <div className="book-card">
            <div className="content-wrapper">
                <img className="book-card-img" src={book.img} alt="book" />
                <div className="card-content">
                    <div className="book-name">{book.title}</div>
                    <div className="book-by">{book.author}</div>
                    <div className="rate">
                        <fieldset className="rating book-rate">
                            {
                                //Five stars Rating bar
                                [...Array(5)].map((star, i) => {
                                    const ratingValue = i + 1;
                                    return (
                                        <label className="full">
                                            <input class = "star-input"
                                                
                                                type="radio" 
                                                name="rating" 
                                                value={ratingValue} 
                                                onClick= {() => setRating(ratingValue)}
                                            />
                                            <FaStar 
                                                size={15} 
                                                className = "rating-star"
                                                color = {ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
                                            />
                                            
                                        </label>
                                    );
                                })
                            }
                        </fieldset>
                        <span class="book-voters card-vote">1.987 voters</span>
                    </div>

                    <div class="book-sum card-sum">{book.description}</div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;
