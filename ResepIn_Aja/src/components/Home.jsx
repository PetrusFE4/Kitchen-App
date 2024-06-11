import React from "react";
import { Link } from "react-router-dom";

const recipeData = [
  { id: 1, image: "/src/assets/img/image1.jpg", title: "Masakan Hari Raya" },
  { id: 2, image: "/src/assets/img/image2.jpg", title: "Masakan Tradisional" },
  { id: 3, image: "/src/assets/img/image3.jpg", title: "Resep Daging" },
  { id: 4, image: "/src/assets/img/image1.jpg", title: "Resep Ayam Goreng" },
  { id: 5, image: "/src/assets/img/image1.jpg", title: "Resep Sayuran" },
  { id: 6, image: "/src/assets/img/image1.jpg", title: "Resep Seafood" },
  { id: 7, image: "/src/assets/img/image1.jpg", title: "Resep Menu Pagi" },
  { id: 8, image: "/src/assets/img/image1.jpg", title: "Resep Menu Malam" },
];

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Segala Jenis Resep Makanan Ada di sini Semuanya...</h1>
        <p>
          Inilah tempatnya segala resep masakan enak! ResepIn Aja telah sajikan
          <br />
          beragam hidangan semi bergaya rumahan, tepat sebagai masakan sehari-hari.
        </p>
        <div className="search-container">
          <button className="explore-button">Explore Resep Makanan</button>
        </div>
      </header>
      <section className="recipe-section">
        <div className="col">
          <p>Resep Makanan</p>
          <h3>Cari Berdasarkan Selera Kamu</h3>
        </div>
        <div className="filter-buttons">
          <button className="filter-button active">All</button>
          <button className="filter-button">Popular</button>
          <button className="filter-button">Kueh</button>
          <button className="filter-button">Manis</button>
        </div>
      </section>
      <div className="container">
        <div className="recipe-grid">
          {recipeData.map((recipe) => (
            <div className="recipe-card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <Link to={`/recipe/${recipe.id}`} className="details-button">
                More details
              </Link>
            </div>
          ))}
        </div>
      </div>
      <section className="body-section">
        <div className="container py-4">
          <div className="row align-items-center p-3">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="display-5">MASIH BINGUNG MAU MASAK APA HARI INI?</h1>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="food-images d-flex">
                <img src="/src/assets/img/image1.jpg" alt="Ayam Goreng" className="img-fluid mx-1" />
                <img src="/src/assets/img/image1.jpg" alt="Makanan 1" className="img-fluid mx-1" />
                <img src="/src/assets/img/image1.jpg" alt="Makanan 2" className="img-fluid mx-1" />
                <img src="/src/assets/img/image1.jpg" alt="Makanan 3" className="img-fluid mx-1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="section-info d-flex align-items-center">
          <div className="container">
            <div className="row align-items-center justify-content-center p-3 rounded">
              <div className="col-md-6 d-flex align-items-center justify-content-center">
                <h6>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae quisquam sed sint id, possimus nihil modi voluptatibus provident a voluptatem quos cumque et quas quis, deleniti odit iste ipsa? ipsum dolor sit
                  amet consectetur adipisicing elit. Nobis recusandae quisquam sed sint id, possimus nihil modi voluptatibus provident a voluptatem quos cumque et quas quis, deleniti odit iste ipsa?
                </h6>
              </div>
              <div className="col-3">
                <h2>Resep In Aja Itu Apa Siiiihhh?</h2>
                <div className="resep-dots mt-3">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
              </div>
              <div className="col-3 mt-20">
                <img src="/src/assets/img/photo1.png" alt="Girl thinking" className="photos" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
