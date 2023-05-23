import {
  ContactContainerStyled,
  TextStyled,
  ButtonStyled
} from './Contact.styled'

function Contact({ text, buttonText }) {
  return (
    <ContactContainerStyled>
      <TextStyled>{text}</TextStyled>
      <ButtonStyled>{buttonText}</ButtonStyled>
    </ContactContainerStyled>
  )
}

export default Contact
