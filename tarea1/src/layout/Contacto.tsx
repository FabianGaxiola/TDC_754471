import { useState } from 'react'
import type { FormEvent } from 'react'

function Contacto() {
  const [enviado, setEnviado] = useState(false)

  function manejarEnvio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const datos = new FormData(event.currentTarget)
    const contacto = Object.fromEntries(datos.entries())

    console.log('Datos del formulario:', contacto)

    setEnviado(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contacto">
      <p className="eyebrow">Contacto</p>
      <h2>Hablemos de tu próximo proyecto</h2>

      {enviado && (
        <p className="confirmation" role="status">
          Gracias por contactarme. Tu mensaje fue recibido correctamente.
        </p>
      )}

      <form onSubmit={manejarEnvio}>
        <label htmlFor="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text" required />

        <label htmlFor="correo">Correo electrónico</label>
        <input id="correo" name="correo" type="email" required />

        <label htmlFor="asunto">Asunto</label>
        <input id="asunto" name="asunto" type="text" required />

        <label htmlFor="mensaje">Mensaje</label>
        <textarea id="mensaje" name="mensaje" rows={6} required />

        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  )
}

export default Contacto;