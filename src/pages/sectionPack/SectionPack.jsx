import {
  SectionPackStyled,
  TitleStyled,
  ArrowStyled
} from './SectionPack.styled'
import Packs from '../../components/packs/Packs'

function SectionPack() {
  return (
    <SectionPackStyled>
      <TitleStyled>PACKS</TitleStyled>
      <ArrowStyled>↓</ArrowStyled>
      <Packs />
    </SectionPackStyled>
  )
}

export default SectionPack
