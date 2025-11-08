import React, { useState } from "react";

function Child({ user, onMessageSend }) {
  return (
    <div style={styles.childBox}>
      <h3>Child Component</h3>
      <p>
        Received User: <strong>{user.name}</strong> ({user.email})
      </p>
      <button
        onClick={() =>
          onMessageSend("Hello Parent! This is a message from the child.")
        }
      >
        Send Message to Parent
      </button>
    </div>
  );
}

function Parent() {
  const [user] = useState({ name: "prasanth", email: "prasanth@gmail.com" });
  const [messageFromChild, setMessageFromChild] = useState("");

  const handleChildMessage = (msg) => {
    setMessageFromChild(msg);
  };

  return (
    <div style={styles.parentBox}>
      <h2>Parent Component</h2>
      <p>User Info is shared with the Child Component below:</p>
      <Child user={user} onMessageSend={handleChildMessage} />

      {messageFromChild && (
        <p style={{ marginTop: "20px", color: "green" }}>
          Message received from Child: "{messageFromChild}"
        </p>
      )}
    </div>
  );
}

const styles = {
  parentBox: {
    border: "2px solid #4CAF50",
    borderRadius: "10px",
    padding: "20px",
    margin: "30px auto",
    width: "400px",
    textAlign: "center",
  },
  childBox: {
    border: "1px solid #888",
    borderRadius: "8px",
    padding: "15px",
    marginTop: "15px",
  },
};

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>React Data Sharing Example</h1>
      <Parent />
    </div>
  );
}

export default App;
