import { NavLink } from "react-router-dom";
import logo from "../../assets/img/xenon_upscaled-removebg.png";
import { CLickMe, Logo, NavBarContainer, NavigationContainer, NavItem, NavLinkStyled, NavList } from "../../styles/components/NavBar.style";



export default function NavBar() {
  return (
    <NavBarContainer>
      {/* Logo */}
      <NavigationContainer>
        {/* For this moment ( w = static number ) */}
        <Logo src={logo} alt="logo" height="50px" />
        {/* Navigation */}
        <NavList>
          <NavItem>
            <NavLinkStyled to="/">HOME</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled  to="/search">SEARCH</NavLinkStyled>
          </NavItem>
          <NavItem>
            <NavLinkStyled  to="/about">ABOUT</NavLinkStyled>
          </NavItem>
          {/* <NavItem>
            <NavLinkStyled to="/contact" >CONTACT</NavLinkStyled>
          </NavItem> */}
        </NavList>
      </NavigationContainer>
      {/* Button CLick Me , redirect to my linkedin */}
      <CLickMe className="nav-btn">
        <a href="https://www.linkedin.com/in/joelvegas/" target="_blank">
          CLICK ME!!! @JOELVEGAS
        </a>
      </CLickMe>
    </NavBarContainer>
  );
}
