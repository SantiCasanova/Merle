import { SectionServiceStyled } from './SectionService.styled'
import Title from '../../components/title/Title'
import Slogan from '../../components/slogan/Slogan'

function SectionService() {
  return (
    <SectionServiceStyled>
      <Title text={'SERVICIOS'} />
      <Slogan
        text={
          'En Merle buscamos facilitar la viralización de un producto excepcional que amamos y nos apasiona.'
        }
      />
    </SectionServiceStyled>
  )
}
export default SectionService
