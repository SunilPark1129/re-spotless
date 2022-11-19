/*
Created by Sunil Park
Project:
Spotless Cleaners
*/

import React, { useState, useEffect } from "react";
import "./font.css";
import { lightTheme, darkTheme } from "./components/Theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";

import ScrollToTop from "./helpers/ScrollToTop";
import { Navbar, Footer } from "./components";
import { Home, Contact, Service } from "./pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(lightTheme);
  const [darkMode, setDarkMode] = useState(true);

  // Check which light or dark color to use
  // Get the color Datas in Theme.js
  useEffect(() => {
    darkMode ? setTheme(lightTheme) : setTheme(darkTheme);
  }, [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Navbar
          darkMode={darkMode}
          setDarkMode={(data) => {
            setDarkMode(data);
          }}
        />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
