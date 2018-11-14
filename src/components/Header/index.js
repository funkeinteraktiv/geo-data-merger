import React, { PureComponent } from 'react';
import Styled from 'styled-components';

import logoSrc from '../../../public/images/logo_big.png';

const HeaderWrapper = Styled.header`
  padding: 8px 16px;
`;

const Logo = Styled.img`
  max-width: 100px;
`;

class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <a href="https://twitter.com/funkeinteraktiv">
          <Logo src={logoSrc} alt="Funke Logo" />
        </a>
      </HeaderWrapper>
    );
  }
}

export default Header;
