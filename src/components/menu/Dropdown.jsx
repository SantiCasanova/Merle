import { slide as Menu } from 'react-burger-menu'
import { dropdownStyles } from './Dropdown.styles'

function Dropdown() {
  return (
    <>
      <Menu right styles={dropdownStyles}>
        <a id='home' className='menu-item' href='/'>
          Home
        </a>
      </Menu>
    </>
  )
}

export default Dropdown
