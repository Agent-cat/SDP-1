import React, { useState, useEffect, useRef } from "react";

const Navcode = ({ setIsOpen }) => {
  const [notification, setNotification] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      handleClose();
    }
  };

  const copyToClipboard = () => {
    const textarea = document.querySelector("textarea");
    textarea.select();
    document.execCommand("copy");
    setNotification("Copied!");
    setTimeout(() => setNotification(""), 2000);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300); // Wait for the transition to complete before closing
  };

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        ref={popupRef}
        className={`w-[80vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900 rounded-xl p-6 shadow-lg transition-all duration-300 ease-in-out ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <span
          onClick={handleClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
        <div className="bg-gray-900 rounded-lg">
          <textarea
            className="w-full text-center items-center h-[60vh] font-bold bg-gray-900 text-white p-4 rounded-lg resize-none focus:outline-none"
            placeholder="CODE"
          ></textarea>
        </div>
        <span
          onClick={copyToClipboard}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Copy
        </span>
        {notification && (
          <div className="fixed top-4 left-4 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navcode;
