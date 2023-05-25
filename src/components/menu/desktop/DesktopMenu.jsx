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
            Option 1
          </AStyled>
        </LiStyled>
        <LiStyled>
          <AStyled>Option 2</AStyled>
        </LiStyled>
        <LiStyled>
          <AStyled>Option 3</AStyled>
        </LiStyled>
      </UlStyled>
    </DesktopMenuContainerStyled>
  )
}

export default DesktopMenu
