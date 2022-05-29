
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
import Completeex4 from './Completeex4'
// core components

function Contactus() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
 <Container style={{marginTop:'50px'}}>
        
       <Completeex4/>     
       
    </Container>
      
     
      
    </>
  );
}

export default Contactus;