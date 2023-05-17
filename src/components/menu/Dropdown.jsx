import { slide as Menu } from 'react-burger-menu'
import { ItemStyled, dropdownStyles } from './Dropdown.styles'

function Dropdown() {
  return (
    <Menu right styles={dropdownStyles}>
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
