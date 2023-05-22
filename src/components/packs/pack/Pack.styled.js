import styled from 'styled-components'

export const PackContainerStyled = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
`

export const TextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Baloo Paaji';
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 10%;
`

export const TitleStyled = styled.span`
  margin-bottom: 5px;
`

export const DescriptionStyled = styled.span`
  margin-bottom: 15px;
`

export const PriceStyled = styled.span``
