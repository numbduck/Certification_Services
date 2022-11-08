import * as React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Landing } from "./pages/landing/landing";
import '@fontsource/raleway/400.css';
import DomesticService from "./pages/landing/domesticService";
import { News } from "./pages/news";
import InternationalService from "./pages/landing/internationalServices";

const theme = extendTheme({
  fonts: {
    heading: "Raleway",
    body: "Raleway",
  },
  breakpoints : {
    sm: '30em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
  }
});

const App = () => (
  <ChakraProvider theme={theme}>
  <Router><Header />
  <Routes>
    <Route exact path="/" element={<Landing />}></Route>
    <Route exact path="/domesticService" element={<DomesticService />}></Route>
    <Route exact path="/internationalService" element={<InternationalService />}></Route>
    <Route path="/news" element={<News/>}></Route>
    </Routes>
    <Footer /></Router>
  </ChakraProvider>
);
export default App;
