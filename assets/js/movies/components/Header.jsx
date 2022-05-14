import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ title }) => {
  return (
    <div className='header'>
      <nav>
        <ul>
          <NavLink to="/" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Accueil</li></NavLink>
          <NavLink to="/coup-de-coeur" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Coup de coeur</li></NavLink>
          <NavLink to="/world" className={(nav) => nav.isActive ? "nav-active" : ""}><li>Countries</li></NavLink>
        </ul>
      </nav>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;