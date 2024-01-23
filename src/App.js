// src/App.js
import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashbord";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [missions, setMissions] = useState([]);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.ag-grid.com/example-assets/space-mission-data.json"
        );
        const data = await response.json();
        setMissions(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loggedIn ? (
        <Dashboard missions={missions} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
