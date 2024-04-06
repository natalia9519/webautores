import React from 'react'
import work from "../../assets/work.png";
import './WorkView.css'

export default function WorkView() {
  return (
    <main className='main-work-view'>
      <figure>
        <img src={work} alt="Imagen de los dos autores" />
      </figure>
      <article>
        <p>Estamos trabajando en esta página</p>
      </article>
    </main>
  )
}
