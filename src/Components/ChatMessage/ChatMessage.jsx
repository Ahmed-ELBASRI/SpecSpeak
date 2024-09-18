import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

const TypedText = ({ message = "", delay = 10 }) => {
  const [revealedLetters, setRevealedLetters] = useState(0);

  // Ensure that message is a string
  const safeMessage = typeof message === "string" ? message : JSON.stringify(message);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevealedLetters((l) => l + 1);
    }, delay);

    if (revealedLetters >= safeMessage.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [safeMessage, delay, revealedLetters]);

  // Format the partially typed message by splitting on newline and inserting <br />
  const formattedMessage = safeMessage.substring(0, revealedLetters).split("\n");

  return (
    <span>
      {formattedMessage.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < formattedMessage.length - 1 && <br />}
        </React.Fragment>
      ))}
    </span>
  );
};

// Add prop-types validation for TypedText
TypedText.propTypes = {
  message: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

const ChatMessage = ({ message }) => {
  return (
    <div>
      <TypedText message={message} />
    </div>
  );
};

// Add prop-types validation for ChatMessage
ChatMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default memo(ChatMessage);
