import {
  PackContainerStyled,
  TextContainerStyled,
  TitleStyled,
  DescriptionStyled,
  PriceStyled
} from './Pack.styled'

function Pack({ title, description, price, image, width, height, top, left }) {
  return (
    <PackContainerStyled
      image={image}
      width={width}
      height={height}
      top={top}
      left={left}
    >
      <TextContainerStyled>
        <TitleStyled>{title}</TitleStyled>
        <DescriptionStyled>{description}</DescriptionStyled>
        <PriceStyled>€ {price}</PriceStyled>
      </TextContainerStyled>
    </PackContainerStyled>
  )
}

export default Pack
