import { useState } from 'react'
import { SectionInformacion } from './components/SectionInformacion/SectionInformacion'
import { Header } from './components/Header/Header'
import { SectionCaracteristicas } from './components/SectionCaracteristicas/SectionCaracteristicas'
import { SectionSuscribete } from './components/SectionSuscribete/SectionSuscribete'
import { Footer } from './components/Footer/Footer'


function App() {
  return (
    <>
      <Header/>
      <SectionInformacion/>
      <SectionCaracteristicas/>
      <SectionSuscribete/>
      <Footer/>
    </>
  )
}

export default App
