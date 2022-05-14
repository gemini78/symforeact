import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './movies/pages/Home';
import UserList from './movies/pages/UserList';
import HomeWorld from './world/pages/HomeWorld';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coup-de-coeur" element={<UserList />} />
        <Route path="/world" element={<HomeWorld />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

const root = createRoot(document.querySelector(".app-movies"));

root.render(<App />);