import {
  DesktopMenuContainerStyled,
  UlStyled,
  LiStyled,
  AStyled
} from './DesktopMenu.styled'

function DesktopMenu() {
  return (
    <DesktopMenuContainerStyled>
      <UlStyled>
        <LiStyled>
          <AStyled>Option 1</AStyled>
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
