import { TitleContainerStyled, TitleStyled, ArrowStyled } from './Title.styled'

function Title({ text }) {
  return (
    <TitleContainerStyled>
      <TitleStyled>{text}</TitleStyled>
      <ArrowStyled>↓</ArrowStyled>
    </TitleContainerStyled>
  )
}

export default Title
