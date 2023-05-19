import { PacksContainerStyled } from './Packs.styled'
import FirstPack from './firstPack/firstPack'
import SecondPack from './secondPack/SecondPack'
import ThirdPack from './thirdPack/ThirdPack'

function Packs() {
  return (
    <PacksContainerStyled>
      <FirstPack />
      <SecondPack />
      <ThirdPack />
    </PacksContainerStyled>
  )
}

export default Packs
