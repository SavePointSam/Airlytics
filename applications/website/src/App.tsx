import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ModalManager } from './context/modal';
import MainNavigation from './components/MainNavigation';
import HomePage from './routes/Home';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <ModalManager>
        <MainNavigation />
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </ModalManager>
    </BrowserRouter>
  );
}
