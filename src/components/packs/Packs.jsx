import { useState, useEffect } from 'react'
import { PacksContainerStyled } from './Packs.styled'
import Pack from './pack/Pack'

function Packs() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // width={'15.625rem'}
  // height={'20rem'}
  // top={'19.125rem'}
  // left={'0.813rem'}
  return (
    <PacksContainerStyled>
      <Pack
        image={'../../public/firstPackImage.svg'}
        width={windowSize < 768 ? '10.813rem' : '16.375rem'}
        height={windowSize < 768 ? '11.875rem' : '18rem'}
        top={windowSize < 768 ? '0.625rem' : '0rem'}
        left={windowSize < 768 ? '0.813rem' : '-6rem'}
        title={'Black'}
        description={'10 fotos 5 videos formato TikTok o Reels'}
        price={'80'}
      />
      <Pack
        image={'../../public/secondPackImage.svg'}
        width={windowSize < 768 ? '12.188rem' : '18.5rem'}
        height={windowSize < 768 ? '15.5rem' : '23.5rem'}
        top={windowSize < 768 ? '7.813rem' : '0rem'}
        left={windowSize < 768 ? '7.063rem' : '10rem'}
        title={'Blue'}
        description={
          '15 fotos 10 videos formato TikTok o Reels Organización de feed.'
        }
        price={'120'}
      />
      <Pack
        image={'../../public/thirdPackImage.svg'}
        width={windowSize < 768 ? '15.625rem' : '20rem'}
        height={windowSize < 768 ? '20rem' : '25rem'}
        top={windowSize < 768 ? '19.125rem' : '19rem'}
        left={windowSize < 768 ? '0.813rem' : '2.5rem'}
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
