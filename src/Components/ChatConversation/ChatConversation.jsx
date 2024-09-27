import { useState, useEffect } from "react";
import "./ChatConversation.css";
import Loading from "../Loading/Loading";
import ChatMessage from "../ChatMessage/ChatMessage";
import CardsContent from "./CardsContent";
import { continueConversation, executeAPI } from "../Services/ChatService";
// import axios from "axios";
const ChatConversation = () => {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const analysisResult = JSON.parse(localStorage.getItem("analysisResult"));
    if (analysisResult) {
      setChatMessages([
        { sender: "AI", content: analysisResult.choices[0].message.content },
      ]);
      // localStorage.removeItem("analysisResult");
    } else {
      setChatMessages([
        { sender: "System", content: "No data found in localStorage." },
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
      const response = await continueConversation(message);
      const gptResponse = response.choices[0].message.content;
      console.log(gptResponse);
      if (response) {
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { sender: "AI", content: gptResponse },
        ]);
      }
      if (gptResponse.startsWith("# # # # #")) {
        const apiRegex = /"method":\s*"(\w+)",\s*"endpoint":\s*"([^"]+)"/;
        const match = apiRegex.exec(gptResponse);
        console.log(match);

        if (match) {
          const method = match[1];
          const apiEndpoint = "http://localhost:8080/"+match[2];

          // +match[2]

          const apiResponse = await executeAPI(apiEndpoint, method);
          console.log("API executed successfully:", apiResponse);

          setChatMessages((prevMessages) => [
            ...prevMessages,
            {
              sender: "System",
              content: apiResponse.choices[0].message.content,
            },
          ]);
        }
      } else {
        console.log("No valid response received from the API.");
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
        <CardsContent />
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
                    <img
                      stroke="none"
                      strokeWidth="0"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      src="src/assets/img/profile.png"
                    ></img>
                  ) : (
                    <img
                      stroke="none"
                      r
                      strokeWidth="0"
                      height="24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      src="src/assets/img/robot.png"
                    ></img>
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
