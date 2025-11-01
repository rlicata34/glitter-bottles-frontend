import { galleryImages } from "../../utils/constants";
import "./Shop.css";

function Shop() {
  return (
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
              <button className="gallery-card__button">Add to Cart</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Shop;
