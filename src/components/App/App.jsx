import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import Cart from "../../pages/Cart/Cart";
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
            {/* <Route path="/custom-order" element={} />
            <Route path="/contact" element={} />
            <Route path="/about" element={} /> */}
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
