import Logo from '../../components/logo/Logo'
import Slogan from '../../components/slogan/Slogan'
import Navbar from '../../components/navbar/Navbar'
import { HomeStyled } from './Home.styled'

function Home() {
  return (
    <HomeStyled>
      <Navbar />
      <Logo />
      <Slogan text={'Creatividad que se sirve en cada taza'} />
    </HomeStyled>
  )
}

export default Home
