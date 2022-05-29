


import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

import About from './views/index-sections/About'
import Workpage from "views/index-sections/Workpage";
import Contactus from "views/index-sections/Contactus";

ReactDOM.render(
  <BrowserRouter>
  <IndexNavbar />
  <Routes>
     


<Route path="/" element={<Index/>} />
<Route path="/about-us" element={<About/>} />
<Route path="/work-opportunities" element={<Workpage/>} />
<Route path="/contact-us" element={<Contactus/>} />
       


</Routes>   



 </BrowserRouter>,

  document.getElementById("root")
);
