import React, { useState, useEffect } from "react";

function App() {

  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  useEffect(() => {
    document.title = text;
  }, [text]);

  useEffect(() => {
    setTimeout(() => setCount(0), 5000);
  }, []);

  console.log("1 Component rendering");

  return (
    <div>
      <button onClick={() => setCount((count) => count +1)}> You clicked me {count} times </button>
      <input
        type="text"
        placeholder="Type in me. . ."
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
    </div>
  )
}

export default App;
