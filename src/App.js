import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { WorkLanguage } from 'Components/WorkLanguage';

export const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const handleLanguageChange = (event) => {
    console.log(event.target.value);
    setSelectedLanguage(event.target.value);
  }

  return (
    <BrowserRouter>
      <section>
        <p>Hi!</p>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          <option value="">Order by work language:</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Spanish">Spanish</option>
        </select>
        <Link to={`/professionals/${selectedLanguage}`}>
          <button type="button" disabled={!selectedLanguage}>Show Work Language List</button>
        </Link>
        <Routes>
          <Route path="/professionals/:worklanguage" element={<WorkLanguage />} />
        </Routes>
      </section>
    </BrowserRouter>
  )
}
