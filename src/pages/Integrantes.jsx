import React from "react"
import nicolasfoto from '../public/nicolas_foto.png'
import joaofoto from '../public/joao_foto.png'
import allana_foto from '../public/allana_foto.png'
import Header from './Header'

function Integrantes() {
  return (
    <>
      <Header />
        <div id="integrantes" className="px-4 py-10">
          <br />
          <br />
          <br />
        <h1 className="font-kulim text-orange text-4xl md:text-6xl font-bold text-center">
          Integrantes
        </h1>
        
        
        
        <br />
        

        <section className="flex flex-col md:flex-row justify-center mt-5 space-y-6 md:space-y-0 md:space-x-10">
          <section className="flex flex-col items-center">
              <img src={nicolasfoto} className="h-48 w-48 md:h-80 md:w-80 rounded-full" alt="Nicolas Matheus" />
              <p className="font-kulim text-xl md:text-2xl font-bold mt-2">
                Nicolas Matheus
              </p>
          </section>

          <section className="flex flex-col items-center">
              <img src={joaofoto} className="h-48 w-48 md:h-80 md:w-80 rounded-full" alt="João Pedro de Oliveira" />
              <p className="font-kulim text-xl md:text-2xl font-bold mt-2">
                João Pedro de Oliveira
              </p>
          </section>

          <section className="flex flex-col items-center">
              <img src={allana_foto} className="h-48 w-48 md:h-80 md:w-80 rounded-full" alt="Allana Freitas" />
              <p className="font-kulim text-xl md:text-2xl font-bold mt-2">
                Allana Freitas
              </p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br /><br /><br /><br />
              <br />
              <br />
          </section>
        </section>
        </div>
    </>
  )
}

export default Integrantes
