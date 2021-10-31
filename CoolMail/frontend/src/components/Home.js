import React, { Component } from 'react'
import { useState } from 'react';
import "./styles.css"
import { FaSearch,FaBars  } from "react-icons/fa";
import NavBar from './Navbar'


function Home()
        {
            return(
                
                <div className = "Home">
                    <main id="main">
                        <div className="overlay">
                        <header className="home-header">

                        <h1 className="page-title">
                        <a className="sidebar-toggle-btn">
                        <FaBars/></a>Inbox<a>
                        </a> 
                        </h1>

                        <div className="search-container">
                             <input placeholder="Search..." className = "search-box"/><FaSearch className = "search-icon" />
                        </div>

                        </header>
                    
                        {
                            //</div><div id="main-nano-wrapper" class="nano">
                            //<div class="nano-content">
                            //</div><ul class="message-list"/>
                        }
                        </div>
                    </main>
                </div>
            )
        }

export default Home;
