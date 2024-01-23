import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashbord";
import Sidebar from "./components/Sidebar";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
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
    <Router>
      <div className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header />

          {/* Main content area */}
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container mx-auto px-4 py-6">
              <div>
                <Routes>
                  <Route
                    path="/dashboard"
                    element={<Dashboard missions={missions} />}
                  />

                  <Route path="/login" element={<Login />} />
                </Routes>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
