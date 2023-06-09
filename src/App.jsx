import './App.css'
import Home from './pages/home/Home'
import SectionPack from './pages/sectionPack/SectionPack'
import SectionService from './pages/sectionService/SectionService'
import Contact from './components/contact/Contact'

function App() {
  return (
    <>
      <Home />
      <SectionPack />
      <SectionService />
      <Contact text={'¡Tomemos un buen café!'} buttonText={'CONTACTO'} />
    </>
  )
}

export default App
