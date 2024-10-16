import React from "react";
import Arduino from '../public/arduino.png';
import Chuva from '../public/sensor_chuva.png';
import Header from './Header';
import SensorMQ2 from '../public/SensorMQ2man.png';
import LCDarduino from '../public/LCDarduino.png';
import DHT11 from '../public/DHT11.png';
import Servo from '../public/MicroServo.png';

function Materiais() {
  return (
    <>
      <Header />
      <div id="materias" className='px-4 py-5'> {/* Adicionei padding para mobile */}
        <br />
        <br />
        <br />
        <br />
        <h1 className="font-kulim text-orange text-4xl md:text-6xl font-bold text-center">
          Materiais
        </h1>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-kulim text-dark-blue font-bold text-lg md:text-2xl mt-4">
            Contamos com os principais materiais para fazer
          </p>
          <p className="font-kulim text-dark-blue font-bold text-lg md:text-2xl">
            o projeto funcionar e a base dele.
          </p>
        </div>
        
        <section className="mt-10">
            <div className='flex flex-col items-center'>
                <h2 className='font-kulim text-dark-blue text-3xl md:text-4xl font-bold text-center'>
                  Arduino
                </h2>
                <div className="max-w-3xl mx-auto text-center">
                  <p className='font-kulim font-bold text-base md:text-2xl mt-4'>
                    Arduino é uma plataforma programável 
                  </p>
                  <p className='font-kulim font-bold text-base md:text-2xl'>
                    de prototipagem eletrônica de placa única e 
                  </p>
                  <p className='font-kulim font-bold text-base md:text-2xl'>
                    hardware livre, que permite aos usuários criar 
                  </p>
                  <p className='font-kulim font-bold text-base md:text-2xl'>
                    objetos eletrônicos interativos e independentes.
                  </p>
                  <p className='font-kulim font-bold text-base md:text-2xl'>
                    O preço gira em torno de R$50,00.
                  </p>
                </div>
                <img src={Arduino} width={300} alt="" className='mt-6 w-64 md:w-96'/>
            </div>
        </section> 

        <section className="mt-10">
            <div className='flex flex-col items-center'>
                <h2 className='font-kulim text-dark-blue text-3xl md:text-4xl font-bold text-center'>
                  Sensor de chuva
                </h2>
                <div className="max-w-3xl mx-auto text-center">
                  <p className="font-kulim font-bold text-base md:text-2xl mt-4">
                    Este Sensor de Chuva pode ser usado para 
                  </p>
                  <p className="font-kulim font-bold text-base md:text-2xl">
                    monitorar uma variedade de condições 
                  </p>
                  <p className="font-kulim font-bold text-base md:text-2xl">
                    climáticas como gotas de chuva ou neve.
                  </p>
                  <p className="font-kulim font-bold text-base md:text-2xl">
                    Quando o clima está seco a saída do sensor fica
                  </p>
                  <p className="font-kulim font-bold text-base md:text-2xl">
                    em estado alto e quando há uma gota de chuva,
                  </p>
                  <p className="font-kulim font-bold text-base md:text-2xl">
                    a saída fica em estado baixo. O preço gira em 
                  </p>
                  <p className="font-kulim font-bold text-base md:text-2xl">
                    torno de R$9,00 ou R$10,00 junto com o comparador.
                  </p>
                </div>
                <img src={Chuva} width={300} alt="" className="mt-6 w-64 md:w-96"/>
            </div>
        </section>
 
        <section className="mt-10">
          <div className='flex flex-col items-center'>
            <h2 className='font-kulim text-dark-blue text-3xl md:text-4xl font-bold text-center'>Sensor MQ2</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-kulim font-bold text-base md:text-2xl mt-4">O sensor de gás MQ2 detecta gases inflamáveis e fumaça, como propano, metano e hidrogênio. Ele é usado em sistemas de segurança e é fácil de integrar com arduino. Seu preço varia entre R$ 10,00 e R$ 20,00.</p>
            </div>
            <img src={SensorMQ2} width={300} alt="" className="mt-6 w-64 md:w-96"/>
          </div>
        </section>

        <section className="mt-10">
          <div className='flex flex-col items-center'> 
            <h2 className='font-kulim text-dark-blue text-3xl md:text-4xl font-bold text-center'>LCD</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-kulim font-bold text-base md:text-2xl mt-4">O LCD (Liquid Crystal Display) é uma tela usada para exibir informações em dispositivos eletrônicos, comum em projetos com microcontroladores. O modelo 16x2 exibe até 32 caracteres. É econômico, consome pouca energia e custa entre R$ 15,00 e R$ 30,00.</p>
            </div>
            <img src={LCDarduino} width={300} alt="" />
          </div>  
        </section>

        <section className="mt-10">
          <div className='flex flex-col items-center'> 
            <h2 className='font-kulim text-dark-blue text-3xl md:text-4xl font-bold text-center'>DHT11 - Sensor De Temperatura e Humidade</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-kulim font-bold text-base md:text-2xl mt-4">O DHT11 é um sensor de temperatura e umidade, amplamente utilizado em projetos eletrônicos. Ele mede a temperatura de 0 a 50 °C e a umidade de 20% a 90% com precisão moderada. É fácil de integrar com o Arduino, e geralmente custa entre R$ 10,00 e R$ 20,00.</p>
            </div>
            <img src={DHT11} width={300} alt=""/>
          </div>  
        </section>

        <section className="mt-10">
          <div className='flex flex-col items-center'>
            <h2 className='font-kulim text-dark-blue text-3xl md:text-4xl font-bold text-center'>MicroServo</h2>  
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-kulim font-bold text-base md:text-2xl mt-4">O micro servo é um pequeno motor que permite controlar a posição de objetos com precisão. Ele é amplamente utilizado em robótica e projetos eletrônicos para mover partes como braços e rodas. O micro servo é fácil de integrar com Arduino e geralmente custa entre R$ 15,00 e R$ 40,00.</p>  
            </div>
            <img src={Servo} width={300} />
          </div>
        </section>
      
      </div>
    </>
  )
}

export default Materiais;
