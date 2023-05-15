import Logo from '../../components/logo/Logo'
import Slogan from '../../components/slogan/Slogan'

import { HomeStyled } from './Home.styled'

function Home() {
  return (
    <HomeStyled>
      <Logo />
      <Slogan />
    </HomeStyled>
  )
}

export default Home
