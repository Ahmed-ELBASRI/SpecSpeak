// import React from "react";
import "./Chat.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";
const Chat =() =>{
    return(
        <>
            <PageHeader pageName={"Chat with GPT"}></PageHeader>
            
            <ScrollRestoration></ScrollRestoration>
        </>
    )
};


export default Chat;
