import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ButtonContainer } from "../components/Customs";
import { logo_icon } from "../constants/imports";

function TopNavbar({ pageName, nextPage }) {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <img src={logo_icon} alt="logo" className="navbar-brand" />
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <div className="nav-link">Transport System</div>
        </li>
      </ul>
      <Link to={nextPage} className="ml-auto">
        <ButtonContainer>{pageName}</ButtonContainer>
      </Link>
    </NavWrapper>
  );
}

export default TopNavbar;

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.3rem;
    text-transform: uppercase;
  }
`;
