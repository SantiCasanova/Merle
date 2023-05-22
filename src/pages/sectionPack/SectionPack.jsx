import { SectionPackStyled } from './SectionPack.styled'
import Packs from '../../components/packs/Packs'
import Title from '../../components/title/Title'

function SectionPack() {
  return (
    <SectionPackStyled>
      <Title text={'PACKS'} />
      <Packs />
    </SectionPackStyled>
  )
}

export default SectionPack
