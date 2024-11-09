import React from 'react'
import Header from './Header'


function Jogo() {
  return (
    <>
    <Header />
      <br />
      <br />
      <br />
      <br />
       <div id="jogo" className="px-4 py-10">
       <section className='flex flex-col items-center'>
       <h1 className='font-kulim text-center text-4xl sm:text-5xl md:text-6xl text-orange font-bold mb-6 hover:text-space-blue transition-all duration-300'>
       Adventure Of Elements
       </h1>


          <p className='text-base font-bold sm:text-lg md:text-xl leading-relaxed max-w-3xl text-center'>
          Embarque numa jornada épica onde os elementos da natureza ganham vida! Enfrente desafios únicos, explorando cenários ! . Teste suas habilidades, domine o poder dos elementos e ajude a restaurar o equilíbrio perdido. Pronto para essa aventura elemental?
 
          </p>
          <br />
          <br />
          <iframe width="570" height="315" src="https://www.youtube.com/embed/p4TMreQ_34s?si=4LwtklEgF16haawR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>
        <br />
        <br />
        <br />
        <br />

       </div>
       
    </>
  )
}

export default Jogo