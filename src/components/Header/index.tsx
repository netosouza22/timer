import IgniteLogo from '../../assets/logo-ignite.svg'
import { HeaderContainer } from './styles'

import { Gear, Scroll, Timer } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderContainer>
      <span>
        <img src={IgniteLogo} alt=""></img>
      </span>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/historico" title="histórico">
          <Scroll size={24} />
        </NavLink>
        <NavLink to="/configuracao" title="configuração">
          <Gear size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}

export default Header
