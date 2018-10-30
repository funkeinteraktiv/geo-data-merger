import React, { PureComponent } from 'react';
import Styled from 'styled-components';

const FooterWrapper = Styled.div`
  background: ${props => props.theme.colors.footer};
  padding: 32px 0;
  color: white;
`;

const FooterInner = Styled.div`
  background: ${props => props.theme.colors.footer};
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;


class Footer extends PureComponent {
  render() {
    return (
      <FooterWrapper>
        <FooterInner>
          Imprint / Privacy
        </FooterInner>
      </FooterWrapper>
    );
  }
}

export default Footer;
