import { useState } from "react";

import Header from "../Header/Header";
import homeImage from "../../assets/home-image.jpg";
import { galleryImages } from "../../utils/constants";
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
          <section className="home">
            <h1 className="home__title">Welcome to my Site</h1>
            <img src={homeImage} alt="Home Image" className="home__image" />
            <button className="home__button">Shop Products</button>
          </section>
          <section className="shop">
            <h1 className="shop__title">Browse the Collection</h1>
            <ul className="shop__gallery">
              {galleryImages.map((galleryImage) => {
                return (
                  <li className="gallery-card" key={galleryImage.id}>
                    <h2 className="gallery-card__title">{galleryImage.name}</h2>
                    <img
                      src={galleryImage.image}
                      alt="Image of Product"
                      className="gallery-card__image"
                    />
                    <p className="gallery-card__text">{galleryImage.price}</p>
                    <button
                      className="gallery-card__button"
                      onClick={handleCartCount}
                    >
                      Add to Cart
                    </button>
                  </li>
                );
              })}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
