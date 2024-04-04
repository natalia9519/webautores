import React from 'react'
import writer1 from '../../assets/writer1.png'
import writer2 from '../../assets/writer2.png'
import './AuthorView.css'

export default function AuthorView() {
  return (
    <main className='author-view'>
      <section className='section-author-view-1'>
        <figure>
<img src={writer1} alt="Escritor Miguel García" />
        </figure>
        <article>
<p>Miguel García, nacido el 30 de noviembre de 1981, es un prolífico autor que ha destacado por su versatilidad literaria. Con una pasión por explorar mundos diversos, ha cautivado a sus lectores con una amplia gama de obras. Su creatividad se refleja en sus escritos, que abarcan desde poesía hasta narrativa. Con una trayectoria literaria en constante evolución, Miguel García ha demostrado su habilidad para transportar a los lectores a universos únicos a través de sus escritos. A sus 42 años, Miguel García continúa enriqueciendo el panorama literario con su creatividad y pasión por la escritura.</p>
        </article>
      </section>
      <section className='section-author-view-2'>
        <figure>
<img src={writer2} alt="Escritora Maria Jiménez" />
        </figure>
        <article>
        <p>Mariana Jiménez, nacida el 15 de julio de 1989, es una talentosa autora cuya escritura se distingue por su enfoque en las diferentes culturas del mundo y con el objetivo de crear una sociedad más inclusiva. Con tan solo 34 años, ha dejado una huella significativa en el mundo literario con sus obras únicas y cautivadoras. Mariana Jiménez ha creado un universo literario vibrante y multifacético a través de sus libros. Su capacidad para transportar a los lectores a mundos imaginativos y emocionantes la ha convertido en una autora admirada y respetada en el ámbito literario. A lo largo de su carrera, Mariana Jiménez ha demostrado una profunda pasión por la escritura y una habilidad excepcional para crear obras que inspiran y emocionan a sus lectores.</p>

        </article>
      </section>

    </main>
  )
}
