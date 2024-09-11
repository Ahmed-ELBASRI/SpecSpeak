import React, { useState, useEffect, memo } from "react";
import PropTypes from "prop-types";

const TypedText = ({ message, delay = 10 }) => {
  const [revealedLetters, setRevealedLetters] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevealedLetters((l) => l + 1);
    }, delay);

    if (revealedLetters >= message.length) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [message, delay, revealedLetters]);

  // Format the partially typed message by replacing newlines with <br />
  const formattedMessage = message
    .substring(0, revealedLetters)
    .replace(/\n/g, "<br />");

  return (
    <span
      dangerouslySetInnerHTML={{ __html: formattedMessage }}
    />
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
