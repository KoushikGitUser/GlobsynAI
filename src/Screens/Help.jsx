import React, { useEffect, useRef, useState } from 'react'

export default function Help() {

  const [response, setResponse] = useState(""); // Stores the growing text
  const [isLoading, setIsLoading] = useState(true); // Flag for when data is loading
  const containerRef = useRef(null); // Ref for auto-
  
  useEffect(() => {
    let index = 0;
    const dataChunks = [
      "Hello, ",
      "this is a continuously updating ",
      "response just like in ChatGPT. ",
      "Data is being added in chunks ",
      "and this simulates how it would work. ",
      "You can add more text ",
      "and watch the response grow over time."
    ];

    const intervalId = setInterval(() => {
      if (index < dataChunks.length) {
        setResponse((prev) => prev + dataChunks[index]);
        index += 1;
      } else {
        setIsLoading(false);
        clearInterval(intervalId); // Stop interval when all data is loaded
      }
    }, 1000); // Simulate a delay between each chunk

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [response]);

  return (
    <div>
    <h2>Continuous Update Example</h2>
    <div
      ref={containerRef}
      style={{
        maxHeight: "200px",
        overflowY: "auto",
        border: "1px solid #ccc",
        padding: "10px",
        marginTop: "10px"
      }}
    >
      {response}
    </div>
    {isLoading && <p>Loading...</p>}
  </div>
  )
}
