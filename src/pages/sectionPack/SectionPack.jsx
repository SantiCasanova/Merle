import { SectionPackStyled } from './SectionPack.styled'
import { Packs } from '../../components/packs/Packs'

function SectionPack() {
  return (
    <SectionPackStyled>
      PACKS ↓
      <Packs />
    </SectionPackStyled>
  )
}

export default SectionPack
