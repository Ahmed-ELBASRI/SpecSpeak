import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

// Component for typing effect
const TypedText = ({ message = "", delay = 10 }) => {
  const [revealedLetters, setRevealedLetters] = useState(0);

  // Ensure message is a string or safely convert it
  const safeMessage = typeof message === "string" ? message : JSON.stringify(message);

  // Check if message contains HTML by simple heuristics
  const containsHTML = /<\/?[a-z][\s\S]*>/i.test(safeMessage);

  useEffect(() => {
    if (!containsHTML) {
      const interval = setInterval(() => {
        setRevealedLetters((l) => l + 1);
      }, delay);

      if (revealedLetters >= safeMessage.length) {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
    }
  }, [safeMessage, delay, revealedLetters, containsHTML]);

  // For HTML content: render immediately without waiting
  if (containsHTML) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: safeMessage }}
        style={{ whiteSpace: "pre-wrap" }} // Preserve whitespaces and newlines
      />
    );
  }

  // For plain text: reveal progressively with typing effect
  const formattedMessage = safeMessage.substring(0, revealedLetters).split("\n");

  return (
    <span>
      {formattedMessage.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < formattedMessage.length - 1 && <br />} {/* Insert <br> for newlines */}
        </React.Fragment>
      ))}
    </span>
  );
};

const ChatMessage = ({ message }) => {
  return (
    <div>
      <TypedText message={message} />
    </div>
  );
};

// PropTypes validation for the components
TypedText.propTypes = {
  message: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

ChatMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default memo(ChatMessage);
