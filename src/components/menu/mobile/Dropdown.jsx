import { slide as Menu } from 'react-burger-menu'
import { ItemStyled, dropdownStyled } from './Dropdown.styled'

function Dropdown() {
  return (
    <Menu right styles={dropdownStyled}>
      <ItemStyled id='home' className='menu-item' href='/'>
        OPTION 1
      </ItemStyled>
      <ItemStyled id='home' className='menu-item' href='/'>
        OPTION 2
      </ItemStyled>
      <ItemStyled id='home' className='menu-item' href='/'>
        OPTION 3
      </ItemStyled>
      <ItemStyled id='home' className='menu-item' href='/'>
        OPTION 4
      </ItemStyled>
    </Menu>
  )
}

export default Dropdown
