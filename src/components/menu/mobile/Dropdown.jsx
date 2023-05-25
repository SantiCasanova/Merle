import { slide as Menu } from 'react-burger-menu'
import { ItemStyled, dropdownStyled } from './Dropdown.styled'

function Dropdown() {
  const handleLinkClick = event => {
    event.preventDefault()
    const targetId = event.target.getAttribute('href')
    const targetElement = document.querySelector(targetId)
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Menu right styles={dropdownStyled}>
      <ItemStyled href='#home' onClick={handleLinkClick} className='menu-item'>
        Home
      </ItemStyled>
      <ItemStyled href='#packs' onClick={handleLinkClick} className='menu-item'>
        Packs
      </ItemStyled>
      <ItemStyled
        href='#services'
        onClick={handleLinkClick}
        className='menu-item'
      >
        Services
      </ItemStyled>
    </Menu>
  )
}

export default Dropdown
