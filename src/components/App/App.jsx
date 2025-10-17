import { useState } from "react";

import Header from "../Header/Header";
import Home from "../../pages/Home/Home";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <main className="main">
          <Home />
        </main>
      </div>
    </div>
  );
}

export default App;
