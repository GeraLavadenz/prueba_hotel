import React from 'react'
import Navbar from '@/components/ui/Navbar'
import Eventos from '@/components/Eventos'
import PortadaEvento from '@/components/PortadaEvento'

const eventos = () => {
  return (
    <div>
      <Navbar/>
      <PortadaEvento/>
      <Eventos/>
      </div>
  )
}

export default eventos