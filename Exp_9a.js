import React, { useState, useEffect } from "react";

function ComponentWithHooks() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div style={styles.container}>
      <h2>Counter using Hooks</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

class ComponentWithoutHooks extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div style={styles.container}>
        <h2>Counter Without Hooks (Class Component)</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>
          Decrement
        </button>
      </div>
    );
  }
}

const styles = {
  container: {
    border: "2px solid #ccc",
    padding: "20px",
    margin: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "200px",
  },
};

function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "30px" }}>
      <ComponentWithHooks />
      <ComponentWithoutHooks />
    </div>
  );
}

export default App;
