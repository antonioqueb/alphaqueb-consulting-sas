import React from 'react'

const Counter = ({ end, label }) => {
  return (
    <div className="flex flex-col items-center text-center px-2 py-8">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold">{end}</div>
      <div className="text-md md:text-lg lg:text-xl">{label}</div>
    </div>
  )
}

const CounterStats = () => {
  return (
    // Cambia aquí: "flex-col" en móviles y "flex-row" en dispositivos más grandes
    <div className="flex flex-col md:flex-row flex-wrap justify-between items-center w-full">
      <Counter end={87} label="Implementaciones Exitosas" />
      <Counter end={214} label="Errores Resueltos" />
      <Counter end={1662} label="Horas de Expertise" />
      <Counter end={174} label="Soluciones Personalizadas" />
    </div>
  )
}

export default CounterStats
