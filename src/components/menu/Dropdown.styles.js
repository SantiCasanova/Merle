import styled from 'styled-components'

export const ItemStyled = styled.a`
  color: white;
  text-decoration: none;
  font-family: 'balooPaaji', sans-serif;
`

export const dropdownStyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '36px',
    right: '10px',
    top: '10px'
  },
  bmBurgerBars: {
    background: 'white',
    borderRadius: '6px',
    height: '15%'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    height: '100%',
    width: '100%'
  },
  bmMenu: {
    background: 'rgba(0, 0, 0, 0.83)',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    gap: '25px'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}
