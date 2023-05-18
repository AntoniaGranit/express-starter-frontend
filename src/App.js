import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WorkLanguage } from 'Components/WorkLanguage';
import { Navbar } from 'Components/Navbar';
import { CompleteList } from 'Components/CompleteList';
import styled from 'styled-components';

const MainSection = styled.section`
width: 80%;
margin: auto;
color: #FC8A6B;
font-family: "Questrial";
padding-top: 60px;`

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <MainSection>
        <Routes>
          <Route path="/professionals/:worklanguage" element={<WorkLanguage />} />
          <Route path="/completelist" element={<CompleteList />} />
        </Routes>
      </MainSection>
    </BrowserRouter>
  )
}
