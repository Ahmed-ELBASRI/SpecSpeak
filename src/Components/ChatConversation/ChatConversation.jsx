import { useState, useEffect } from "react";
import axios from "axios";
import CardsConent from "./CardsContent";
import { analyzeAPI } from "../Services/ChatService"; // Adjust the import path as necessary
import "./ChatConversation.css";
import Loading  from "../Loading/Loading";
import ChatMessage from "../ChatMessage/ChatMessage";
import { continueConversation } from "../Services/ChatService";

const ChatConversation = () => {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Retrieve the uploaded file's result from localStorage
    const uploadedFile = JSON.parse(localStorage.getItem("uploadedFile"));

    if (uploadedFile) {
      const analyzeFile = async () => {
        setIsLoading(true); // Start loading spinner
        try {
          const analysisResponse = await analyzeAPI(uploadedFile);
          if (analysisResponse) {
            setChatMessages((prevMessages) => [
              ...prevMessages,
              {
                sender: "AI",
                content: analysisResponse.choices[0].message.content,
              },
            ]);
          } else {
            throw new Error("Analysis failed.");
          }
        } catch (error) {
          console.error("Error analyzing file:", error);
          addErrorMessage("Error analyzing file. Please try again.");
        } finally {
          setIsLoading(false); // Stop loading spinner after analysis completes
        }
      };

      analyzeFile();
      localStorage.removeItem("uploadedFile"); // Clean up after processing
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

        // Log the entire response for debugging purposes
        console.log("Received response:", response);

        // Check if the response is a string or object and handle accordingly
        const llmMessage = typeof response === "string" ? response : response?.choices?.[0]?.message?.content;

        if (llmMessage) {
            // Log the extracted message for debugging
            console.log("Extracted llmMessage:", llmMessage);

            if (!llmMessage.startsWith("If you want to call this API request:")) {
                setChatMessages((prevMessages) => [
                    ...prevMessages,
                    { sender: "AI", content: llmMessage },
                ]);
            }
            extractApiRequestDetails(llmMessage);
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

  const callApiAndDisplayResponse = async (url, method, requestBody) => {
    try {
      const config = {
        method: method.toLowerCase(),
        url: url,
        data: requestBody,
      };

      const response = await axios(config);
      const formattedResponse = `
        GET ${url}
        
        HTTP/1.1 200
        ${JSON.stringify(response.data, null, 2)}
      `;

      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: "API Response", content: formattedResponse },
      ]);
    } catch (error) {
      console.error("Error calling API:", error);
      addErrorMessage("Error calling the API. Please try again.");
    }
  };

  const extractApiRequestDetails = (content) => {
    const triggerPhrase = "If you want to call this API request:";
    if (content.startsWith(triggerPhrase)) {
      const jsonString = content.slice(
        content.indexOf("{"),
        content.lastIndexOf("}") + 1
      );
      try {
        const apiDetails = JSON.parse(jsonString);
        callApiAndDisplayResponse(
          apiDetails.url,
          apiDetails.method,
          apiDetails.requestBody
        );
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    }
  };

  const isCodeContent = (content) => {
    try {
      JSON.parse(content);
      return true;
    } catch {
      return false;
    }
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
                style={{ width: "55rem", fontSize:"1.1rem"}}
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
                  <ChatMessage message={msg.content} ></ChatMessage>
              </div>
            ))}
          </div>
        </div>
      )}
      <form
        onSubmit={handleSendMessage}
        className="w-full flex justify-center gap-3 mt-3 py-2 items-center rounded-lg"
      >
        <textarea
          value={message}
          onChange={handleMessageChange}
          disabled={isDisabled}
          rows={2}
          placeholder="Enter your message..."
          className="w-4/5 max-h-[300px] rounded-lg resize-none px-3 py-2 text-zinc-200 bg-gray-800 border-gray-700 border-2 focus:border-gray-400 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          disabled={isDisabled}
          className="w-[120px] rounded-lg bg-blue-600 hover:bg-blue-500 text-white py-2 px-4"
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </main>
  );
};

export default ChatConversation;
