function Proyectos() {
  return (
    <section id="proyectos">
      <p className="eyebrow">Proyectos</p>
      <h2>Trabajo destacado</h2>

      <div className="grid">
        <article className="card">
          <h3>Portafolio personal</h3>
          <p>
            Sitio web desarrollado con React y TypeScript para mostrar
            experiencia, habilidades y proyectos.
          </p>
          <span>React · TypeScript · CSS</span>
        </article>

        <article className="card">
          <h3>Aplicación de tareas</h3>
          <p>
            Aplicación para organizar actividades, prioridades y estados de
            trabajo.
          </p>
          <span>React · JavaScript · Vite</span>
        </article>

        <article className="card">
          <h3>Catálogo digital</h3>
          <p>
            Interfaz responsive para consultar productos y presentar
            información de manera clara.
          </p>
          <span>HTML · CSS · TypeScript</span>
        </article>
      </div>
    </section>
  )
}

export default Proyectos;