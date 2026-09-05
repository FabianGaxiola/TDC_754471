function Proyectos() {
  return (
    <section id="proyectos">
      <p className="eyebrow">Proyectos</p>
      <h2>Trabajo destacado</h2>

      <div className="grid">
        <article className="card">
          <h3>Portafolio personal</h3>
          <p>
            CV desarrollado con React y TypeScript para mostrar
            experiencia, habilidades y proyectos.
          </p>
          <span>React · TypeScript · CSS</span>
        </article>

        <article className="card">
          <h3>Videojuego tipo Galaga</h3>
          <p>
            Proyecto desarrollado en Java para clase de POO
            inspirado en el videojuego Galaga.
          </p>
          <span>Java</span>
        </article>

        <article className="card">
          <h3>Landing Page para equipo en Intel</h3>
          <p>
            Landing page desarrollada para distribuir aplicaciones
            y dar soporte a los ingenieros de manufactura en el area
            de Data Center en Intel.
          </p>
          <span>PHP · CSS · JavaScript</span>
        </article>
      </div>
    </section>
  )
}

export default Proyectos;