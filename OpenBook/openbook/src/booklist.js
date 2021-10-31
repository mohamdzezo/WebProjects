import React, { useState, Component } from "react";
import PropTypes from "prop-types";
import "./index.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import BookCard from "./bookcard";

let books = [
    {
        title: "Mido King",
        author: "mido",
        img: "https://upload.wikimedia.org/wikipedia/ar/9/98/%D8%A3%D8%B1%D8%B6_%D8%B2%D9%8A%D9%83%D9%88%D9%84%D8%A7.jpg",
        currentRate: 4,
        description:
            "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.",
    },
    {
        title: "Mido the  King",
        author: "mido",
        img: "https://upload.wikimedia.org/wikipedia/ar/9/98/%D8%A3%D8%B1%D8%B6_%D8%B2%D9%8A%D9%83%D9%88%D9%84%D8%A7.jpg",
        currentRate: 3,
        description:
            "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.",
    },
    {
        title: "Mido the  King",
        author: "mido",
        img: "https://upload.wikimedia.org/wikipedia/ar/9/98/%D8%A3%D8%B1%D8%B6_%D8%B2%D9%8A%D9%83%D9%88%D9%84%D8%A7.jpg",
        currentRate: 5,
        description:
            "Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years.",
    },
];

const Page = () => {
    const [bookList, setBookList] = useState(books);
    return (
        <div className="page">
            <div className="header">
                <div className="browse-category">
                    <span>Browse Category</span>
                    <RiArrowDropDownLine className="browse-arrow" size={30} />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search Book" />
                </div>

                <div className="header-title">
                    read<span>books</span>
                </div>

                <div className="profile">
                    <div className="user-profile">
                        <img
                            src="https://randomuser.me/api/portraits/women/63.jpg"
                            alt="user-img"
                            class="user-img"
                        />
                    </div>

                    <div className="profile-menu">
                        <FaBars className="menu-bar" />
                        <span> Menu</span>
                    </div>
                </div>
            </div>
            <div className="book-cards">
                {bookList.map((booke, i) => {
                    return <BookCard book={booke} className="Mido" />;
                })}
            </div>
        </div>
    );
};

export default Page;
