import styled from 'styled-components'

export const ItemStyled = styled.a`
  color: white;
  text-decoration: none;
  font-family: 'balooPaaji', sans-serif;
`

export const dropdownStyled = {
  bmBurgerButton: {
    position: 'fixed',
    width: '28px',
    height: '20px',
    right: '25px',
    top: '25px'
  },
  bmBurgerBars: {
    background: 'white',
    borderRadius: '6px',
    height: '2px'
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
