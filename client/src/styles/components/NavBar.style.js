import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10vh;
`;

// export const LogoContainer = styled.div`

export const NavigationContainer = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
  height: 100%;
`;

export const Logo = styled.img`
  height: 50px;
  margin: 0 30px;
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  color: black;
  /* background-color: #F4F253; */
  height: 100%;
`;

export const NavItem = styled.li`
  margin: 0 10px;
  /* background-color: #FF4F33; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 80%;
  /* width: 100px; */
  margin: 0 2rem;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #11838a;
  font-size: 0.8rem;
  padding: 10px 20px;

  &.active {
    display: flex;
    align-items: flex-end;
    color: white;
    background-color: #ff4f33;
    height: 100%;
    padding: 10px 20px;
  }
`;

export const CLickMe = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  height: 100%;
  width: 300px;
  a {
    text-decoration: none;
    text-align: end;
    color: #ff4f33;

    font-weight: bold;
    font-size: 0.8rem;
    padding: 0 10%;
  }
`;
