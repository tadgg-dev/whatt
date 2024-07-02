
import React from 'react';
import whoWeAreImage from '../img/torta-quienessomos.jpg'

const WhoWeAre = () => {
  return (
    <main>
      <section class="mt-3 mb-3">
        <div class="row">
          <div class="col-12">
            <h2>¿Quienes somos?</h2>

            <p class="sub-quienessmos">
              {" "}
              Tati cocinerita es un sitio web completo donde podes ver de la A a
              la Z todas las recetas que siempre tuviste ganas de hacer.
            </p>
          </div>

          <div class="col-6 alinear-imagen">
            <img
              src={whoWeAreImage}
              class="img-fluid"
              height="427"
              width="640"
              alt="porcion torta de chocolate y frutas enplatada"
            />
          </div>

          <div class="col-6 m-auto">
            <h3 class="cursiva">
              Tenemos ganas de comunicarte nuestros dos grandes lemas:
            </h3>
            <h4>Cocinar esta al alcance de todos</h4>
            <p class="descripcion-quienessomos">
              Conocé todas las maneras de hacer un plato de cocina. Exiten miles
              de formas de comer, siempre podes elegir la tuya!
              <br />
              Si no sabes como, aca te enseñamos con nuestras recetas aptas para
              todo público!!
            </p>
            <h4>Animate a Crear</h4>
            <p class="descripcion-quienessomos">
              Conocé nuestros nuevos lanzamientos de recetas tanto para el día
              como para la noche. <br /> Podes agregarle tu propio toque
              creativo y una gran variedad de sabores y colores a tus platos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WhoWeAre