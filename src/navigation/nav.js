// src/navigation/nav.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home'; // Adjust the import path as needed
import HelpPage from '../pages/Help';
import InvoiceGuidePage from '../pages/InvoiceGuide';

// Import other components you want to route to

export default function Nav() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* Default landing page */}
      <Route path="*" element={<HomePage />} /> {/* Catch-all route */}
      <Route path="/help" element={<HelpPage />} /> {/* Catch-all route */}
      <Route path="/invoicing-guide" element={<InvoiceGuidePage />} /> {/* Catch-all route */}
    </Routes>
  );
}
