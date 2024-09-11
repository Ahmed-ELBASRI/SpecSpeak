// import React from "react";
import "./Chat.css";
import PageHeader from "../../Components/Shared/PageHeader/PageHeader";
import { ScrollRestoration } from "react-router-dom";
import ChatConversation from "../../Components/ChatConversation/ChatConversation";
const Chat =() =>{
    return(
        <>
            <PageHeader pageName={"Chat with GPT"}></PageHeader>
            <ChatConversation></ChatConversation>
            <ScrollRestoration></ScrollRestoration>
        </>
    )
};


export default Chat;
