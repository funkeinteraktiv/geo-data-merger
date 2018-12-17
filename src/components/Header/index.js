import React, { PureComponent } from 'react';
import Styled from 'styled-components';

import logoSrc from '../../../public/images/funkeinteraktiv_signet.png';

const HeaderWrapper = Styled.header`
  padding: 8px 16px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${props => props.theme.colors.black}
    font-weight: 300;
    }

  a:hover, a:visited, a:active {
    color: inherit;  
   }

  span {
    margin-left: 1em;
    }

  }
`;

const Logo = Styled.img`
  max-width: 50px;
`;

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <a href="https://twitter.com/funkeinteraktiv">
          <Logo src={logoSrc} alt="Funke Logo" />
          <span>FUNKE <br />Interaktiv</span>
        </a>
      </HeaderWrapper>
    );
  }
}

export default Header;
