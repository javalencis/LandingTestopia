import { useEffect, useState } from 'react'
import './Header.scss'
export const Header = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll',handleScroll)
  
    return () => {
      window.removeEventListener('scroll',handleScroll)
    }
  }, [])
  
  const handleScroll = () =>{
    const scrollTop = document.documentElement.scrollTop
    if(scrollTop > 100){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  }

  return (
    <header className="Header" style={scrolled ? {backgroundColor : "#c0c1de"}:{}}>
      <h1>Testop<span>IA</span></h1>
    </header>
  )
}
