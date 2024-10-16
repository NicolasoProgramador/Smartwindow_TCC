import React from 'react'
import robohome from '../public/robohome.png'
import Pebble from '../public/Pebble.png'
import Header from './Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className='py-5 px-4 '> {/* Adicionei padding lateral para mobile */}
        <section id="inicio" className='flex flex-col items-center pt-20 md:pt-40'>
          <h1 className='font-kulim text-dark-blue text-4xl md:text-6xl font-bold text-center'>
            Venha Conhecer 
          </h1>
          <h1 className='font-kulim text-dark-blue text-4xl md:text-6xl font-bold text-center'>
            a janela inteligente!
          </h1>

          <div className='absolute left-0.5 right-1'>
            <div className='rounded-full bg-dark-blue h-30 w-30'></div>
          </div>

          <img src={robohome} alt="" className='mt-7 w-48 md:w-72'/>
        </section>

        <section className='mt-10 md:mt-14 flex flex-col items-center'>
          <h1 className='font-kulim text-orange text-4xl md:text-6xl font-bold text-center'>
            Qual o nosso
          </h1>
          <h1 className='font-kulim text-orange text-4xl md:text-6xl font-bold text-center'>
            diferencial?
          </h1>
          <p className='font-kulim italic text-text-spaceblue font-bold text-xl md:text-2xl text-center mt-4'>
            Nossa Smart Window (Janela Inteligente) oferece a segurança que a sua residência precisa!
          </p>
          <p className='font-kulim font-bold text-lg md:text-2xl text-center mt-4 max-w-5xl'>
            Oferecemos segurança e tecnologia à sua casa,para proteger de fortes chuvas, umidade, fumaça e também substâncias tóxicas pelo ar, simplesmente usando o sistema Arduino, onde o projeto irá identificar umidade ao redor e fumaça para automaticamente fechar a janela.
          </p>
          <img src={Pebble} className='mt-6 w-64 md:w-96' alt="" />
        </section>
      </div>
    </>
  )
}
