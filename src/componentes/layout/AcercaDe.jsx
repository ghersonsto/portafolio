import "./AcercaDe.css";

const metricas = [
  { valor: "6+", etiqueta: "años en soporte y sistemas" },
  { valor: "ML/DL", etiqueta: "investigacion publicada en Editorial Springer" },
  { valor: "M365", etiqueta: "automatizacion y administracion cloud" },
];

const especialidades = [
  "Infraestructura TI, redes, seguridad, respaldos y soporte N1/N2",
  "Microsoft 365, Exchange, SharePoint, Power Automate y Active Directory",
  "Machine Learning, Deep Learning, Python, TensorFlow, Keras y scikit-learn",
  "Desarrollo web, Figma, HTML5, CSS, JavaScript y documentacion tecnica",
];

const AcercaDe = () => {
  return (
    <>
      <section className="acerca-de" id="acerca-de">
        <div className="grid">
          <div className="col-1">
            <div className="fotos">
              <img
                src="./assets/acerca-de-1.png"
                className="foto"
                alt="Gherson Steven Torres trabajando en soluciones tecnologicas"
              />
              <img
                src="./assets/acerca-de-2.png"
                className="foto"
                alt="Proyecto de tecnologia y soporte TI"
              />
            </div>
          </div>

          <div className="col-2">
            <h4 className="pre-titulo">Acerca de mi</h4>
            <h3 className="titulo">
              Ingeniero de Software que conecta operacion TI, datos e IA
            </h3>
            <p className="resumen destacado">
              Soy Gherson Torres, ingeniero enfocado en construir soluciones
              prácticas para empresas que buscan orden, continuidad operativa y
              una mejora real en sus procesos tecnológicos.
            </p>
            <p className="resumen">
              Mi experiencia abarca la gestión de infraestructura, soporte
              técnico, ecosistema Microsoft 365, automatización y desarrollo
              web. Además, cuento con una sólida base en análisis de datos e
              inteligencia artificial, habiendo publicado en Editorial Springer una
              investigación enfocada en la detección de alcoholismo mediante
              señales EEG, utilizando modelos de Machine Learning y Deep
              Learning.
            </p>

            <div className="metricas">
              {metricas.map((metrica) => (
                <article className="metrica" key={metrica.valor}>
                  <strong>{metrica.valor}</strong>
                  <span>{metrica.etiqueta}</span>
                </article>
              ))}
            </div>

            <ul className="especialidades">
              {especialidades.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <a href="#contacto" className="boton">
              Conversemos
              <span className="icono">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                  <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcercaDe;
