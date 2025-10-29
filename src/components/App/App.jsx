import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
