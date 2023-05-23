import styled from 'styled-components'

export const ContactContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 8rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`

export const TextStyled = styled.span`
  color: #fec849;
  font-family: 'Baloo Paaji';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 100%;
  text-align: center;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 21px;
  }
`

export const ButtonStyled = styled.button`
  font-family: 'Arial';
  font-style: normal;
  font-weight: 400;
  font-size: 0.55rem;
  border: none;
  line-height: 11px;
  color: white;
  border-radius: 6px;
  background: #f14b06;
  width: 5rem;
  height: 1.563rem;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 6rem;
    height: 2rem;
  }

  &:active {
    border: 0.5px solid orange;
  }

  &:hover {
    background-color: #c73e05ff;
  }
`
