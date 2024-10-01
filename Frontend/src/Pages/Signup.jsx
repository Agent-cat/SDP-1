import React, { useState, useEffect } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    if (!username) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Signup submitted", { email, password, username });
    }
  };

  return (
    <div
      className={`w-full max-w-md scale-110 px-10 py-10 rounded-lg mx-auto relative transition-opacity duration-500 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <h2 className="text-3xl font-[gilroy-bold] mb-6 text-center">Sign Up</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="text-gray-700 text-sm font-[gilroy-medium] mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className={`shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline ${
              errors.username ? "border-red-500" : ""
            }`}
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && (
            <p className="text-red-500 text-xs italic">{errors.username}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="text-gray-700 text-sm font-[gilroy-medium] mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className={`shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="text-gray-700 text-sm font-[gilroy-medium] mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className={`shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password ? "border-red-500" : ""
            }`}
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && (
            <p className="text-red-500 text-xs italic">{errors.password}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="text-gray-700 text-sm font-[gilroy-medium] mb-2"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <input
            className={`shadow appearance-none text-sm border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${
              errors.confirmPassword ? "border-red-500" : ""
            }`}
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-xs italic">
              {errors.confirmPassword}
            </p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-gray-800 text-xl hover:bg-gray-700 text-white font-[gilroy-medium] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="absolute top-0 left-0 -mt-8 -ml-8 w-16 h-16 animate-pulse">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="#1E90FF" opacity="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 -mb-8 -mr-8 w-20 h-20 animate-bounce">
        <svg viewBox="0 0 100 100">
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            fill="#9370DB"
            rx="20"
            ry="20"
            opacity="0.5"
          />
        </svg>
      </div>
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-12 h-12 animate-spin">
        <svg viewBox="0 0 100 100">
          <polygon points="50,0 100,100 0,100" fill="#32CD32" opacity="0.5" />
        </svg>
      </div>
    </div>
  );
};

export default Signup;
