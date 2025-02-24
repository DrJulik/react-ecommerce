import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import ProductGrid from "./components/ProductGrid";
function App() {
  return (
    <>
      <Header />
      <Banner />
      <ProductGrid />
    </>
  );
}

export default App;
