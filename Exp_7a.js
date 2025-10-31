import React, { useState } from 'react';

function AdminDashboard() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Manage users, settings, and view system reports.</p>
    </div>
  );
}

function UserDashboard() {
  return (
    <div>
      <h2>User Dashboard</h2>
      <p>View your profile, activities, and update your preferences.</p>
    </div>
  );
}

function GuestView() {
  return (
    <div>
      <h2>Welcome, Guest</h2>
      <p>Please, log in to access your dashboard.</p>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("guest");
  const [darkMode, setDarkMode] = useState(false);

  const handleLogin = (selectedRole) => {
    setIsLoggedIn(true);
    setRole(selectedRole);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole("guest");
  };

  const themeStyle = {
    backgroundColor: darkMode ? "#1e1e1e" : "#f2f2f2",
    color: darkMode ? "white" : "black",
    minHeight: "100vh",
    textAlign: "center", 
    padding: "20px",
    transition: "0.3s",
  };

  const renderDashboard = () => {
    if (!isLoggedIn) return <GuestView />;
    if (role === "admin") return <AdminDashboard />;
    if (role === "user") return <UserDashboard />;
  };

  return (
    <div style={themeStyle}>
      <h1>Conditional Rendering in React</h1>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>

      {!isLoggedIn ? (
        <div>
          <button onClick={() => handleLogin("user")}>Login as User</button>
          <button
            onClick={() => handleLogin("admin")}
            style={{ marginLeft: "10px" }}>Login as Admin</button>
        </div>
      ) : (
        <div>
          <p>
            Logged in as: <b>{role}</b>
          </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      <hr style={{ margin: "30px" }} />
      {renderDashboard()}
    </div>
  );
}

export default App;
