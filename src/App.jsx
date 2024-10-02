import React, { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import CartProvider from './components/store/s.jsx';
import FooterFlex from './components/FooterFlex/FooterFlex.jsx';
import LandingPages from './components/LandingPages.jsx';

// Lazy load BuyPage and FormServices components
const BuyPage = lazy(() => import("./components/Navbar/BuyPage"));
const FormServices = lazy(() => import("./components/FormServices/FormServices.jsx"));

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <CartProvider>
      <Router>
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <LandingPages />
        <div className="bg-white jawdat dark:bg-gray-900 dark:text-white duration-200 relative pb-[65px]">
          <Routes>
          
            <Route path="/" element={<Services />} />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <BuyPage />
                </Suspense>
              }
            />
            <Route
              path="/form-services"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <FormServices />
                </Suspense>
              }
            />
          </Routes>
        </div>
        <FooterFlex />
      </Router>
    </CartProvider>
  );
};

export default App;
