import { useState } from 'react'
import { SectionInformacion } from './components/SectionInformacion/SectionInformacion'
import { Header } from './components/Header/Header'
import { SectionCaracteristicas } from './components/SectionCaracteristicas/SectionCaracteristicas'


function App() {
  return (
    <>
      <Header/>
      <SectionInformacion/>
      <SectionCaracteristicas/>
    </>
  )
}

export default App
