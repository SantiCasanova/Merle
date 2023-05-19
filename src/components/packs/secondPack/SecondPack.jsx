import {
  PackContainerStyled,
  TextContainerStyled,
  TitleStyled,
  DescriptionStyled,
  PriceStyled
} from './SecondPack.styled'

function SecondPack() {
  return (
    <PackContainerStyled>
      <TextContainerStyled>
        <TitleStyled></TitleStyled>
        <DescriptionStyled></DescriptionStyled>
        <PriceStyled></PriceStyled>
      </TextContainerStyled>
    </PackContainerStyled>
  )
}

export default SecondPack
