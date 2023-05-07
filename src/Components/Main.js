import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { WorkLanguage } from './WorkLanguage';

export const Main = () => {
  return (
    <section>
      <p>Hi!</p>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Order by work language:</option>
        <option value="English">English</option>
        <option value="German">German</option>
        <option value="Spanish">Spanish</option>
      </select>
      <Routes>
        <Route path="/worklanguage/:language" element={<WorkLanguage />} />
        <Link to={`/worklanguage?language=${selectedLanguage}`}>
          <button type="button">Show professionals</button>
        </Link>
      </Routes>
    </section>
  )
}