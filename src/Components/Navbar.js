import React, { useState } from 'react';
import { NavArrowDown } from 'iconoir-react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const H1 = styled.h1`
color: #FB563E;
font-family: "Questrial";
font-size: 20px;
margin-left: 10%;
margin-top: 40px;
margin-bottom: 20px;
font-weight: bold;
display: flex;
justify-content: flex-start;

@media (min-width: 1024px){
    font-size: 20px;
}`

const NavBar = styled.header`
background-color: #1C0825;
height: 70px;
width: 100%;
display: flex;
position: sticky;
display: flex;
gap: 20px;
flex-direction: row;
position: sticky;
top: 0;
z-index: 1;`

const HomeLink = styled(Link)`
color: #FB563E;
font-family: "Questrial";
font-weight: bold;
font-size: 20px;
text-decoration: none;
display: flex;
justify-content: flex-start;
border: none;
align-items: center;
`

const NavigationLink = styled(NavLink)`
color: #FB563E;
font-family: "Questrial";
font-weight: bold;
font-size: 20px;
text-decoration: none;
display: flex;
justify-content: center;
align-items: center;
`

export const Navbar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const handleLanguageChange = (event) => {
    console.log(event.target.value);
    setSelectedLanguage(event.target.value);
  }

  return (
    <NavBar>
      <H1>&gt;_ IT salaries.2020</H1>
      <HomeLink to="/">home</HomeLink>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Order by work language:</option>
        <option value="English">English</option>
        <option value="German">German</option>
        <option value="Spanish">Spanish</option>
        <option value="Russian">Russian</option>
        <option value="Polish">Polish</option>
      </select>
      <Link to={`/professionals/${selectedLanguage}`}>
        <button type="button" disabled={!selectedLanguage}>Sort by work language</button>
      </Link>
      <NavigationLink to="MaleList">by gender <NavArrowDown height={25} width={25} /></NavigationLink>
      <NavigationLink to="/FemaleList">by language<NavArrowDown height={25} width={25} /></NavigationLink>
      <NavigationLink to="/CompleteList">everyone</NavigationLink>
    </NavBar>
  )
}