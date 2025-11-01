import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleCartCount = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="page">
      <div className="page__content">
        <Header cartCount={cartCount} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/shop"
              element={<Shop handleCartCount={handleCartCount} />}
            />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
