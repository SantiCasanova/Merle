import {
  PackContainerStyled,
  TextContainerStyled,
  TitleStyled,
  DescriptionStyled,
  PriceStyled
} from './FirstPack.styled'

function FirstPack() {
  return (
    <PackContainerStyled>
      <TextContainerStyled>
        <TitleStyled>HOLA</TitleStyled>
        <DescriptionStyled>DESCRIPCION</DescriptionStyled>
        <PriceStyled>$120</PriceStyled>
      </TextContainerStyled>
    </PackContainerStyled>
  )
}

export default FirstPack
