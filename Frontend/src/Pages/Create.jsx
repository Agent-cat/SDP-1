import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ addPage }) => {
  const [newPageName, setNewPageName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPageName.trim()) {
      if (addPage(newPageName)) {
        navigate(`/${newPageName.toLowerCase()}`);
      } else {
        setError("A page with this name already exists.");
      }
    } else {
      setError("Page name cannot be empty.");
    }
  };
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`p-4 max-w-md mx-auto bg-white  transition-all duration-500 ease-in-out overflow-y-auto h-screen text-black ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-2xl font-bold mb-4">Create New Page</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            value={newPageName}
            onChange={(e) => {
              setNewPageName(e.target.value);
              setError(""); // Clear error when user types
            }}
            placeholder="Enter page name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          Create Page
        </button>
      </form>
    </div>
  );
};

export default Create;
