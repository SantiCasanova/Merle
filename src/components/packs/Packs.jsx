import { PacksContainerStyled } from './Packs.styled'
import Pack from './pack/Pack'

function Packs() {
  return (
    <PacksContainerStyled>
      <Pack
        image={'../../public/firstPackImage.svg'}
        width={'10.813rem'}
        height={'11.875rem'}
        top={'0.625rem'}
        left={'0.813rem'}
        title={'Black'}
        description={'10 fotos 5 videos formato TikTok o Reels'}
        price={'80'}
      />
      <Pack
        image={'../../public/secondPackImage.svg'}
        width={'12.188rem'}
        height={'15.5rem'}
        top={'7.813rem'}
        left={'7.063rem'}
        title={'Blue'}
        description={
          '15 fotos 10 videos formato TikTok o Reels Organización de feed.'
        }
        price={'120'}
      />
      <Pack
        image={'../../public/thirdPackImage.svg'}
        width={'15.625rem'}
        height={'20rem'}
        top={'19.125rem'}
        left={'0.813rem'}
        title={'Red'}
        description={
          '10 fotos 5 videos formato TikTok o Reels Organización de feed Campaña de publicidad de uno de los contenidos creados'
        }
        price={'180'}
      />
    </PacksContainerStyled>
  )
}

export default Packs
