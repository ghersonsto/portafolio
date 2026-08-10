import "./Clientes.css";

const logos = [
  { nombre: "ITSANET Peru S.A.C.", src: "./assets/logos/Recharge.svg" },
  { nombre: "ROOK Services S.A.C.", src: "./assets/logos/Volume.svg" },
  { nombre: "Grupo de Desarrollo & Innovacion Peru", src: "./assets/logos/Umbrella.svg" },
  { nombre: "VSI Industria S.A.C.", src: "./assets/logos/Waveless.svg" },
  { nombre: "GEPAE Peru S.A.C.", src: "./assets/logos/Vision.svg" },
  { nombre: "OLIPAT S.A.C.", src: "./assets/logos/Recharge.svg" },
];

const Clientes = () => {
  const logosLoop = [...logos, ...logos];

  return (
    <>
      <section className="clientes">
        <div className="encabezado">
          <h3 className="titulo">Empresas y clientes</h3>
          <p className="subtitulo">
            Organizaciones donde aporte continuidad operativa, soporte,
            automatizacion e infraestructura TI.
          </p>
        </div>
        <div className="banner-logos" aria-label="Empresas donde he trabajado">
          <div className="track">
            {logosLoop.map((logo, index) => (
              <div className="logo-item" key={`${logo.nombre}-${index}`}>
                <img src={logo.src} alt={logo.nombre} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Clientes;
