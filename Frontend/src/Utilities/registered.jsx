import React, { useState, useEffect } from "react";

const Registered = () => {
  const [showMessage, setShowMessage] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start the fade-out effect after 1.5 seconds
    const fadeTimeout = setTimeout(() => {
      setFadeOut(true);
    }, 1500);

    // Completely hide the message after 2 seconds
    const hideTimeout = setTimeout(() => {
      setShowMessage(false);
    }, 2000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4">
      {showMessage && (
        <div
          className={`bg-green-500 text-white p-4 rounded-md shadow-md transition-opacity duration-1000 ease-in-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          Registration Successful!
        </div>
      )}
    </div>
  );
};

export default Registered;
