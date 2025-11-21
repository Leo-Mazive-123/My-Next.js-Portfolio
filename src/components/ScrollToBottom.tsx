"use client";

import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa"; // arrow down icon

const ScrollToBottom: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY < document.body.scrollHeight - window.innerHeight - 300) {
        // show button if not near bottom
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToBottom}
          className="fixed bottom-20 right-3 z-50 p-3 rounded-full bg-gray-700 text-white shadow-lg hover:bg-gray-800 transition"
          aria-label="Scroll to bottom"
        >
          <FaArrowDown />
        </button>
      )}
    </>
  );
};

export default ScrollToBottom;
