import { slide as Menu } from 'react-burger-menu'
import { ItemStyled, dropdownStyles } from './Dropdown.styles'

function Dropdown() {
  return (
    <Menu right styles={dropdownStyles}>
      <ItemStyled id='home' className='menu-item' href='/'>
        Home
      </ItemStyled>
    </Menu>
  )
}

export default Dropdown
