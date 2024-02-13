import React, { Component } from 'react'
import Firstpage from './components/FirstPage/FirstPage';
import './components/FirstPage/FirstPage.css';
import LoginPage from './components/LoginPage/LoginPage';
import './components/LoginPage/LoginPage.css';
import DashboardPage from './components/DashboardPage/DashboardPage';
import './components/DashboardPage/DashboardPage.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/firstPage" element={<Firstpage/>} />
            <Route path="/loginPage" element={<LoginPage/>} />
            <Route path="/dashboardPage" element={<DashboardPage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


