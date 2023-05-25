import {
  DesktopMenuContainerStyled,
  UlStyled,
  LiStyled,
  AStyled
} from './DesktopMenu.styled'

function DesktopMenu() {
  const handleLinkClick = event => {
    event.preventDefault()
    const targetId = event.target.getAttribute('href')
    const targetElement = document.querySelector(targetId)
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <DesktopMenuContainerStyled>
      <UlStyled>
        <LiStyled>
          <AStyled href='#home' onClick={handleLinkClick}>
            Home
          </AStyled>
        </LiStyled>
        <LiStyled>
          <AStyled href='#packs' onClick={handleLinkClick}>
            Packs
          </AStyled>
        </LiStyled>
        <LiStyled>
          <AStyled href='#services' onClick={handleLinkClick}>
            Services
          </AStyled>
        </LiStyled>
      </UlStyled>
    </DesktopMenuContainerStyled>
  )
}

export default DesktopMenu
