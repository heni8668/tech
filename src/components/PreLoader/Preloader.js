import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // Simulate the window onload event using React
    window.addEventListener("load", handleLoad);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("load", handleLoad);
  }, [isLoading]);

  if (!isLoading) {
    return null; // Do not render the preloader if loading is complete
  }

  return (
    <div className="bd-preloader">
      <div className="bd-preloader__center">
        <span>
          <img src="/assets/img/logo/logo.png" alt="Logo" />
        </span>
      </div>
    </div>
  );
};

export default Preloader;
