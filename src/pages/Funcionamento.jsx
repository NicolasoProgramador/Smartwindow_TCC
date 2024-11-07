import React from 'react';
import Bluetooth from '../public/bluetooth.jpeg';
import Header from './Header';
import SensorMQ2 from '../public/SensorMQ2man.png';
import LCDarduino from '../public/LCDarduino.png';
import DHT11 from '../public/DHT11.png';
import Chuva from '../public/sensor_chuva.png';
import Servo from '../public/MicroServo.png';
import videoJanela from '../public/videoJanela.mp4'

function Funcionamento() {
  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div id="funcionamento" className='px-4 sm:px-8 py-8 bg-gray-50'>
        <section className='flex flex-col items-center'>
          <h1 className='font-kulim text-center text-4xl sm:text-5xl md:text-6xl text-orange font-bold mb-6'>
            Funcionamento
          </h1>

          <p className='text-base font-bold sm:text-lg md:text-xl leading-relaxed max-w-3xl text-center'>
            O <span className="font-bold text-dark-blue">Smart Window</span> é um projeto de automação residencial voltado para a segurança e conforto. O sistema utiliza sensores e um micro servo para controlar automaticamente uma janela deslizante, com o objetivo de fechar ou abrir conforme as condições ambientais detectadas. Ele opera da seguinte forma:
            <br /><br />
            <span className="font-bold text-dark-blue">Sensor de Chuva</span>: Quando o sensor de chuva detecta a presença de água, o sistema fecha automaticamente a janela, evitando que a água entre no ambiente. A janela permanece fechada até que o sensor detecte que o tempo está seco. Neste caso, a janela é automaticamente reaberta.
            <img src={Chuva} width={300} alt="" className="mx-auto" />
            <br /><br />
            <span className="font-bold text-dark-blue">Sensor de Gás/Fumaça (MQ2)</span>: Caso o sensor MQ2 identifique a presença de fumaça ou gases potencialmente perigosos, o sistema automaticamente abre a janela para permitir a ventilação, garantindo maior segurança ao ambiente.
            <img src={SensorMQ2} width={300} alt="" className="mx-auto" />
            <br /><br />
            <span className="font-bold text-dark-blue">Display LCD</span>: As informações sobre o estado atual da janela e as condições detectadas são exibidas em um display LCD, proporcionando uma visualização fácil para o usuário. Por exemplo, quando água é detectada, o LCD exibe "AGUA DETECTADA!" e "Fechando janela". Se o ambiente estiver seco, o LCD exibe "Tempo seco" e "Abrir Janela". Quando fumaça é detectada, o LCD alerta com "Fumaca Detectada!" e "Abrir Janela".
            <img src={LCDarduino} width={300} alt="" className="mx-auto" />
            <br /><br />
            <span className="font-bold text-dark-blue">Micro Servo</span>: O movimento da janela é controlado por um micro servo, que abre ou fecha a janela conforme as leituras dos sensores. A janela se move para a posição fechada (180 graus) ao detectar chuva e volta à posição aberta (0 graus) quando o ambiente está seco ou há fumaça no local.
            <img src={Servo} width={300} alt="" className="mx-auto" />
            <br /><br />
            <span className="font-bold text-dark-blue">DHT11</span>: mede a temperatura e umidade do ambiente, exibindo esses dados no LCD ou monitor serial. Ele é usado para monitorar o clima interno no projeto Smart Window, mas não controla a abertura ou fechamento da janela diretamente.
            <img src={DHT11} width={300} alt="" className="mx-auto" />
            <br /><br />
            O Smart Window oferece uma solução prática e eficiente para evitar a entrada de água em dias de chuva e melhorar a ventilação em casos de fumaça, tudo isso sem a necessidade de intervenção manual, garantindo conforto e segurança ao usuário.
            <br /><br />
            <span className="font-bold text-dark-blue">Hc-05</span>:No projeto Smart Window, o módulo Bluetooth HC-05 permite a comunicação entre a janela inteligente e o aplicativo no celular.Com o módulo tem as seguintes funções:<br />
            Controlar a janela: Enviar comandos para abrir ou fechar a janela pelo aplicativo, com resposta imediata do sistema.
            Visualizar o status: Receber atualizações sobre o estado da janela (aberta, fechada ou em movimento) diretamente no aplicativo.
            

          </p>

          <video width= {300} controls>
          <source src= {videoJanela} type="video/mp4" />
             
            </video>
        </section>
      </div>
    </>
  );
}

export default Funcionamento;
