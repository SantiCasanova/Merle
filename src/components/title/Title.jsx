import { TitleStyled, ArrowStyled } from './Title.styled'

function Title({ text }) {
  return (
    <>
      <TitleStyled>{text}</TitleStyled>
      <ArrowStyled>↓</ArrowStyled>
    </>
  )
}

export default Title
