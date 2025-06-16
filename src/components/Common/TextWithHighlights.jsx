import React from "react";
import classNames from "classnames";

const TextWithHighlights = ({
  text,
  tag = "p",
  highlights = [],
  className = "",
  highlightStyle = "bold",
  highlightColor = "text-white",
  highlightClassName = "",
}) => {
  const highlightStyles = {
    bold: "font-medium",
    italic: "italic",
    underline: "underline",
    gradient: "text-gradient",
    custom: highlightClassName,
  };

  const processText = () => {
    if (!highlights.length) return text;

    let processedText = text;
    const parts = [];

    // Sort highlights by their position in text to maintain order
    const sortedHighlights = [...highlights].sort((a, b) => {
      return text.indexOf(a) - text.indexOf(b);
    });

    let lastIndex = 0;

    sortedHighlights.forEach((highlight) => {
      const index = processedText.indexOf(highlight);
      if (index === -1) return;

      // Add text before highlight
      if (index > lastIndex) {
        parts.push({
          text: processedText.slice(lastIndex, index),
          isHighlight: false,
        });
      }

      // Add highlighted text
      parts.push({
        text: highlight,
        isHighlight: true,
      });

      lastIndex = index + highlight.length;
    });

    // Add remaining text
    if (lastIndex < processedText.length) {
      parts.push({
        text: processedText.slice(lastIndex),
        isHighlight: false,
      });
    }

    return parts;
  };

  const textParts = processText();

  const Tag = tag;

  return (
    <Tag className={classNames(className)}>
      {Array.isArray(textParts)
        ? textParts.map((part, index) => (
            <span
              key={index}
              className={classNames(
                part.isHighlight && [
                  highlightStyles[highlightStyle],
                  highlightColor,
                  "transition-colors duration-300",
                ]
              )}
            >
              {part.text}
            </span>
          ))
        : text}
    </Tag>
  );
};

export default TextWithHighlights;
