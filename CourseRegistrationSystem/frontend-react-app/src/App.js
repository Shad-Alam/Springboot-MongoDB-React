import React, { Component } from 'react'
import Firstpage from './components/FirstPage/FirstPage';
import './components/FirstPage/FirstPage.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Firstpage/>} />
            <Route path="/firstpage" element={<Firstpage/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;


