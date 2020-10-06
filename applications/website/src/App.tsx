import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global, css } from '@emotion/core';

import { ModalManager } from './context/modal';
import MainNavigation from './components/MainNavigation';
import HomePage from './routes/Home';
import AboutPage from './routes/About';
import ContactPage from './routes/Contact';

export default function App() {
  return (
    <React.Fragment>
      <Global
        styles={css`
          * {
            font-family: 'Poppins', sans-serif;
            color: #040d14;
          }

          a {
            text-decoration: none;
          }

          a:hover {
            color: #f47c20;
            border-bottom: 2px solid #f47c20;
            margin-bottom: -2px;
          }
        `}
      />

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
    </React.Fragment>
  );
}
