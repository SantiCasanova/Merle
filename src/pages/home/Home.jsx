import Logo from '../../components/logo/Logo'
import Slogan from '../../components/slogan/Slogan'
import Navbar from '../../components/navbar/Navbar'
import { HomeStyled } from './Home.styled'

function Home() {
  return (
    <HomeStyled>
      <Navbar />
      <Logo />
      <Slogan />
    </HomeStyled>
  )
}

export default Home
