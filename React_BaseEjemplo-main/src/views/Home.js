import React from "react";
import cookiesImage from "../img/galletas.jpg";
import cakeImage from "../img/torta.jpg";
import { Row, Col } from "react-bootstrap";

const Home = () => (
  <main>
    <section className="mt-3">
      <h2>¡Mira las recetas ganadoras del concurso!</h2>

      <div>
        <h3 className="titulo-receta">Galletitas Navideñas</h3>
        <Row>
          <Col xs={6} md={6} lg={6}>
            <img
              src={cookiesImage}
              className="img-fluid"
              height="227"
              width="440"
              alt="galletas navideñas sobre una mesa"
            />
          </Col>

          <Col xs={6} md={6} lg={6}>
            <p className="receta-descripcion">
              Galletitas de manteca con glaseado real.
              <br />
              Receta especial para mimar a los más chicos y por que no a los más
              grandes.
            </p>
            <p className="ingredientes">Ingredientes</p>
            <ul>
              <li>225 g manteca</li>
              <li>100 g azúcar</li>
              <li>200 g harina</li>
              <li>100 g maizena</li>
              <li>360 g azúcar impalpable</li>
              <li>2 cucharas soperas merengue en polvo</li>
              <li>4 mangas descartables y papel film</li>
              <li>Colorante vegetale dorado</li>
            </ul>
          </Col>
        </Row>
        <div className="contedor-botonrecetas">
          <a href="#">
            <button className="btn btn-outline boton-recetas">
              Ver receta completa
            </button>
          </a>
        </div>

        <h3 className="titulo-receta">Torta de Chocolate</h3>
        <Row>
          <Col xs={6} md={6} lg={6}>
            <img
              src={cakeImage}
              className="img-fluid"
              height="227"
              width="440"
              alt="porcion de torta sobre un plato"
            />
          </Col>
          <Col xs={6} md={6} lg={6}>
            <p className="receta-descripcion">
              Receta para los amantes del chocolate. Espero que la disfruten{" "}
            </p>
            <p className="ingredientes">Ingredientes</p>
            <ul>
              <li>200 g harina leudante</li>
              <li>200 g cacao en polvo</li>
              <li>60 ml aceite</li>
              <li>200 g azúcar</li>
              <li>1 cucharadita esencia de vainilla</li>
              <li>250 g Cobertura de chocolate</li>
              <li>1/4 k frutillas</li>
            </ul>
          </Col>
        </Row>

        <div className="contedor-botonrecetas">
          <a href="#">
            <button className="btn btn-outline boton-recetas">
              Ver receta completa
            </button>
          </a>
        </div>
      </div>
    </section>
  </main>
);

export default Home;
