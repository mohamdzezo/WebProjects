import React, { Component } from 'react'
import { useState } from 'react';
import "./styles.css"
import { FaStar } from "react-icons/fa";
let Message ={
    isread : true,
    sender: 'mohamdmido2011@gmail.com',
    subject: 'haconma matatta haconma matattahaconma matattahaconma matattahaconma matattahaconma matatta',
    date: '12/9/2020'
}
function MailBox ({message = Message}){
    return(
            <label className="mail-summary-bar">
                    <div className = "summary-start">
                            <input type = "checkbox"/>
                            <FaStar className="summary-star"></FaStar>

                    </div>
                        <p className="summary-text sender">{message.sender}</p>
                        <div className="summary-text subject">{message.subject}<span className="teaser"></span></div>
                        <div className="summary-text date">{message.date}</div>      
            </label>
            
        )
}

export default MailBox;