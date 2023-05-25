import { useEffect, useState } from 'react'
import { NavbarContainerStyled } from './Navbar.styled'
import Dropdown from '../menu/mobile/Dropdown'
import DesktopMenu from '../menu/desktop/DesktopMenu'

function Navbar() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <NavbarContainerStyled>
      {windowSize < 768 ? <Dropdown /> : <DesktopMenu />}
    </NavbarContainerStyled>
  )
}

export default Navbar
