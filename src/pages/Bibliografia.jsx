import React from "react";
import sensorchuva from '../public/sensor_chuva.png';
import Header from './Header';

function Bibliografia() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div id="bibliografia" className='min-h-screen bg-white px-4 sm:px-8 py-8'>
        <h2 className="font-kulim text-orange text-3xl sm:text-4xl md:text-5xl font-bold text-center">
          Referências <br /> Bibliográficas
        </h2>
        <section className="flex flex-col items-center mt-6 w-full max-w-screen-lg mx-auto">
          <div className="w-full space-y-6">
            <p className="font-kulim text-center font-bold text-base sm:text-lg md:text-2xl break-words">
              <a href="https://ecoinovar.com.br/cd2017/arquivos/artigos/ECO1729.pdf" target="_blank" rel="noopener noreferrer">
                https://ecoinovar.com.br/cd2017/arquivos/artigos/ECO1729.pdf
              </a>
            </p>
            <p className="font-kulim text-center font-bold text-base sm:text-lg md:text-2xl break-words">
              <a href="https://ric.cps.sp.gov.br/handle/123456789/7407" target="_blank" rel="noopener noreferrer">
                https://ric.cps.sp.gov.br/handle/123456789/7407
              </a>
            </p>
            <p className="font-kulim text-center font-bold text-base sm:text-lg md:text-2xl break-words">
              <a href="https://www.youtube.com/watch?v=Qgv7h8H24d0" target="_blank" rel="noopener noreferrer">
                https://www.youtube.com/watch?v=Qgv7h8H24d0
              </a>
            </p>
          </div>
          <img src={sensorchuva} className='mt-6 w-40 sm:w-60 md:w-80' alt="Sensor de chuva" />
        </section>
      </div>
    </>
  );
}

export default Bibliografia;
