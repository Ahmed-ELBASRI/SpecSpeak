import { useState, useEffect } from "react";
import "./ChatConversation.css";
import Loading from "../Loading/Loading";
import ChatMessage from "../ChatMessage/ChatMessage";
import CardsConent from "./CardsContent";
import { continueConversation } from "../Services/ChatService"; // New import
import axios from "axios";
const ChatConversation = () => {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const analysisResult = JSON.parse(localStorage.getItem("analysisResult"));
    if (analysisResult) {
      setChatMessages([
        { sender: "AI", content: analysisResult.choices[0].message.content }
      ]);
      // localStorage.removeItem("analysisResult"); 
    } else {
      setChatMessages([
        { sender: "System", content: "No data found in localStorage." }
      ]);
    }
  }, []);

  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    // Display the user's message in the chat
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "You", content: message },
    ]);
    setMessage("");
    setIsDisabled(true);
    setIsLoading(true);

    try {
      // Log the message for debugging purposes
      console.log("Sending message to continueConversation:", message);

      // Use `continueConversation` for ongoing conversations
      const response = await continueConversation(message);

      // const responseContent  = response.choices[0].message.content;
      console.log("Received response:", response);
      if (response ) {
        // Log the extracted message for debugging
        console.log("Extracted response:", response );
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { sender: "AI", content: response.choices[0].message.content },
          ]);
        
      } else {
        addErrorMessage("No valid response received from the API.");
      }
    } catch (error) {
      console.error("Error continuing conversation:", error);
      addErrorMessage("Error continuing conversation. Please try again.");
    } finally {
      setIsDisabled(false);
      setIsLoading(false);
    }
  };

  const addErrorMessage = (message) => {
    setChatMessages((prevMessages) => [
      ...prevMessages,
      { sender: "Error", content: message },
    ]);
  };


  return (
    <main className="sm:w-[90%] md:w-[70%] w-full mt-10 mx-auto flex flex-col items-center justify-center px-4">
      {isLoading && <Loading />}
      {chatMessages.length === 0 ? (
        <CardsConent />
      ) : (
        <div className="relative w-full flex flex-col">
          <div className="overflow-y-auto max-h-[400px] overflow-x-hidden w-full chat-container">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className="w-64 flex gap-3 px-4 text-zinc-200 text-sm flex-1 border-b border-gray-700 py-4"
                style={{ width: "55rem", fontSize: "1.1rem" }}
              >
                <span className="flex items-center justify-center shrink-0 overflow-hidden rounded-lg w-7 h-7 bg-gray-900 border border-gray-700">
                  {msg.sender === "You" ? (
                    <svg
                      stroke="none"
                      fill="white"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                    </svg>
                  ) : (
                    <svg
                      stroke="none"
                      fill="white"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      ></path>
                    </svg>
                  )}
                </span>
                <ChatMessage message={msg.content} />
              </div>
            ))}
          </div>
        </div>
      )}
      <form
        onSubmit={handleSendMessage}
        className="relative w-full mt-4 flex items-center"
      >
        <input
          type="text"
          name="text"
          value={message}
          onChange={handleMessageChange}
          disabled={isDisabled}
          className="bg-gray-800 p-4 rounded-lg text-zinc-200 w-full text-lg focus:outline-none focus:ring-2 focus:ring-gray-600 mr-5"
          placeholder="Enter your message..."
        />
        <button
          type="submit"
          className="w-[120px] rounded-lg bg-blue-600 hover:bg-blue-500 text-white py-2 px-4"
          disabled={isDisabled}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </main>
  );
};

export default ChatConversation;
