import { Link } from "react-router-dom";

import homeImage from "../../assets/home-image.jpg";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <h1 className="home__title">Welcome to my Site</h1>
      <img src={homeImage} alt="Home Image" className="home__image" />
      <Link to="/shop" className="home__link">
        <button className="home__button" type="button">
          Shop Products
        </button>
      </Link>
    </section>
  );
}

export default Home;
