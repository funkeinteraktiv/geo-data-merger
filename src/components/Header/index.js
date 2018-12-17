import React, { PureComponent } from 'react';
import Styled from 'styled-components';

import logoSrc from '../../../public/images/funkeinteraktiv_signet.png';

const HeaderWrapper = Styled.header`
  padding: 8px 16px;
`;

const Logo = Styled.img`
  max-width: 50px;
`;

const Name = Styled.span`
  margin-left: 2em;
`;

const Link = Styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.colors.black}
  font-weight: 300;
  :hover, :visited, :active {
    color: inherit
  }
`;

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <Link href="https://twitter.com/funkeinteraktiv">
          <Logo src={logoSrc} alt="Funke Logo" />
          <Name>FUNKE <br />Interaktiv</Name>
        </Link>
      </HeaderWrapper>
    );
  }
}

export default Header;
