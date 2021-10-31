import React, { Component } from 'react'
import { useState } from 'react';
import "./styles.css"
import { FaStar } from "react-icons/fa";

function NavBar()
        {
            return(
                
                <div>    

                    <aside id="sidebar" className="nano">
                        <div className="nano-content">
                        <div className="logo-container">
                            <span className="logo glyphicon glyphicon-envelope"></span>
                            Mail
                        </div>
                        <a className="compose-button">Compose</a>
                        <menu className="menu-segment">                   
                            <ul>
                            <li className="active"><a href="#">Inbox<span> (43)</span></a></li>
                            <li><a href="#">Important</a></li>
                            <li><a href="#">Sent</a></li>
                            <li><a href="#">Drafts</a></li>
                            <li><a href="#">Trash</a></li>
                            </ul>
                        </menu>
                        </div>
                    </aside>


                </div>
            )
        }

export default NavBar;