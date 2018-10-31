import React, { PureComponent } from 'react';
import Styled from 'styled-components';

const FooterWrapper = Styled.div`
  background: ${props => props.theme.colors.darkBackground};
  padding: 32px 0;
  color: white;
`;

const FooterInner = Styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

class Footer extends PureComponent {
  render() {
    return (
      <FooterWrapper>
        <FooterInner>
          <a href="https://github.com/funkeinteraktiv">Imprint / Privacy</a>
        </FooterInner>
      </FooterWrapper>
    );
  }
}

export default Footer;
