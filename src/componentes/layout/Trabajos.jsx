import "./Trabajos.css";

import { useState } from "react";
import Modal from "../Modal";
import trabajos from "../data/trabajos";

const categorias = [
  { id: "todos", nombre: "Todos" },
  { id: "microsoft-365", nombre: "Microsoft 365" },
  { id: "automatizacion", nombre: "Automatizacion" },
  { id: "infraestructura-ti", nombre: "Infraestructura TI" },
  { id: "datos-ia", nombre: "Datos e IA" },
  { id: "desarrollo-web", nombre: "Desarrollo Web" },
];

const Trabajos = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos");
  const [trabajosFiltrados, setTrabajosFiltrados] = useState(trabajos);
  const [estadoModal, setEstadoModal] = useState(false);
  const [trabajoSeleccionado, setTrabajoSeleccionado] = useState(trabajos[0]);

  const handleChange = (e) => {
    const categoria = e.target.id;
    setCategoriaSeleccionada(categoria);

    if (categoria === "todos") {
      setTrabajosFiltrados(trabajos);
      return;
    }

    setTrabajosFiltrados(
      trabajos.filter((trabajo) => trabajo.categoria === categoria)
    );
  };

  const openModal = (e, id) => {
    e.preventDefault();
    const trabajo = trabajos.find((trabajo) => trabajo.id === id);

    if (trabajo) {
      setTrabajoSeleccionado(trabajo);
      setEstadoModal(true);
    }
  };

  const closeModal = () => {
    setEstadoModal(false);
  };

  return (
    <>
      <section className="trabajos" id="trabajos">
        <div className="encabezado">
          <h3 className="titulo">Mis trabajos</h3>
          <p className="subtitulo">
            Proyectos y responsabilidades reales de mi experiencia en TI,
            automatizacion, datos y desarrollo.
          </p>
        </div>

        <div className="filtros">
          {categorias.map((categoria) => (
            <label htmlFor={categoria.id} key={categoria.id}>
              <input
                type="radio"
                name="categoria"
                id={categoria.id}
                onChange={handleChange}
                checked={categoriaSeleccionada === categoria.id}
              />
              <span className="opcion">{categoria.nombre}</span>
            </label>
          ))}
        </div>

        <div className="grid">
          {trabajosFiltrados.map((trabajo) => (
            <div className="trabajo" key={trabajo.id}>
              <a
                href="#"
                className="thumb"
                onClick={(e) => openModal(e, trabajo.id)}
              >
                <img
                  loading="lazy"
                  src={trabajo.thumb.url}
                  alt={trabajo.thumb.alt}
                />
              </a>

              <div className="info">
                <div className="textos">
                  <a
                    href="#"
                    className="nombre"
                    onClick={(e) => openModal(e, trabajo.id)}
                  >
                    {trabajo.info.nombre}
                  </a>
                  <p className="categoria">{trabajo.info.categoria}</p>
                </div>
                <a
                  href="#"
                  className="btn-ir"
                  onClick={(e) => openModal(e, trabajo.id)}
                  aria-label={`Ver detalle de ${trabajo.info.nombre}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {estadoModal && (
        <Modal closeModal={closeModal} trabajo={trabajoSeleccionado} />
      )}
    </>
  );
};

export default Trabajos;
