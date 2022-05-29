import React from "react";
import { Link } from "react-router-dom";


// reactstrap components
import {
  
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,

} from "reactstrap";

function IndexNavbar() {
     const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
     const [collapseOpen, setCollapseOpen] = React.useState(false);
     React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
         
            <NavbarBrand
              
              target="_blank"
              id="navbar-brand"
            >
              WordsRWeapons, Inc
            </NavbarBrand>
            
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>

            <NavItem>
                <NavLink to="/" tag={Link}>
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about-us" tag={Link}>
                  ABOUT
                </NavLink>
              </NavItem>
            <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
              
                  <p>GET STARTED</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                   
                  Hot Deal
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                   
                  Tier 1: Basic Blog Content and Content Duplication
                  </DropdownItem>
                  
                  <DropdownItem to="/index" tag={Link}>
                   
                  Tier 2 Content: Basic Article Type Content.
                  </DropdownItem>
                  
                  <DropdownItem to="/index" tag={Link}>
                   
                  Content: eBook.
                  </DropdownItem>
                  
                  <DropdownItem to="/index" tag={Link}>
                   
                  Expert Article
                  </DropdownItem>
                    
                  <DropdownItem to="/index" tag={Link}>
                   
                  Tier 5 Copywriting Per Word
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                   
                  Editing and Posting Services Per Page
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                   
                  Consulting Services Per Hour
                  </DropdownItem>
                  
                  
                </DropdownMenu>
              </UncontrolledDropdown>
          
            <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={(e) => e.preventDefault()}
                >
              
                  <p>How we make your life easier</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/index" tag={Link}>
                   
                  Buy These  Products
                  </DropdownItem>
                 
                </DropdownMenu>
              </UncontrolledDropdown>
          

           
          


           

            
          
              <NavItem>
                <NavLink to="/work-opportunities" tag={Link}>
                  WORK OPP0RTUNITIES
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink to="/contact-us" tag={Link}>
                  CONTACT US
                </NavLink>
              </NavItem>
              
             
              
           
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
