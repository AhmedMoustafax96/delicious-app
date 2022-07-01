import Home from "./Home";
import React from 'react';
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from 'react-router-dom';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      <Route path="/Cuisine/:type" element={<Cuisine />} />
      <Route path="/Searched/:search" element={<Searched />} />
      <Route path ="/recipe/:name" element={<Recipe />} />
      </Routes>
      </AnimatePresence>
  )
}

export default Pages;