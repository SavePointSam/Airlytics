import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Global, css } from '@emotion/core';

import { ModalManager } from './context/modal';
import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';
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

          p {
            font-size: 18px;
            margin: 0 0 0.67em;
          }

          a {
            text-decoration: none;
          }

          a:hover {
            color: #f47c20;
            border-bottom: 2px solid #f47c20;
            margin-bottom: -2px;
          }

          h1 {
            font-size: 52px;
            margin: 0 0 0.67em;
          }

          h2 {
            font-size: 32px;
            margin: 0 0 0.83em;
          }

          .invert {
            color: #ffffff;
          }

          @media (max-width: 768px) {
            h1 {
              font-size: 32px;
            }

            h2 {
              font-size: 24px;
            }

            p {
              font-size: 15px;
            }
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

          <Footer />
        </ModalManager>
      </BrowserRouter>
    </React.Fragment>
  );
}
