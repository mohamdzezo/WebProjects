import React, { Component } from 'react'
import { useState } from 'react';
import "./styles.css"
import { FaSearch,FaBars  } from "react-icons/fa";
import {link} from "react-router-dom";
import NavBar from './Navbar'
import MailBox from './Mailbox';


let Messages ={
    isread : true,
    sender: 'mandso',
    subject: 'haconma mahaconma matattahaconma matattahaconma matattahaconma matattahaconma matattatatta',
    date: '12/9/2020'
}

function Home()
        {

            let handleClick = (e)=>{
                console.log("this is working fine");
                e.preventDefault();
                e.target.style.color = 'black'
                console.log(e.target);
            }
            return(
                
                <div className = "home">
                            <NavBar/>
                            <div className="home-header">
                                <h1 className="page-title">
                                    <FaBars className="sidebar-btn"/>
                                    Inbox
                                </h1>
                                <div className="search-container">
                                    <input placeholder="Search..." className = "search-box"/><FaSearch className = "search-icon" />
                                </div>
                                
                               
                            </div> 
                            <div className = "mails-header">
                            </div>
                            <div className = "mail-bars">
                            <MailBox message ={Messages} />
                            {
                                [...Array(10)].map(
                                    ()=>{
                                        return(
                                            <MailBox />
                                            )
                                        }
                                        )
                                        
                                    }
                                    <MailBox message ={Messages} />
                            </div>
                            
                            <div className = "mails-footer">
                            </div>
                            {
                                //</div><div id="main-nano-wrapper" class="nano">
                                //<div class="nano-content">
                                //</div><ul class="message-list"/>
                            }
                        
                </div>
            )
        }

export default Home;
