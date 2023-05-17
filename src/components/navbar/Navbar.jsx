import { NavbarContainerStyled } from './Navbar.styled'
import Dropdown from '../menu/Dropdown'

function Navbar() {
  return (
    <NavbarContainerStyled>
      <Dropdown />
    </NavbarContainerStyled>
  )
}

export default Navbar
