import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './routes/Home';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
