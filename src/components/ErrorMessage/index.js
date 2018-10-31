import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
  background: ${props => props.theme.colors.warning};
  padding: 12px;
  color: white;
  border-radius: 4px;
  margin-top: 8px;
  display: flex
`;

const Inner = Styled.div`
  margin-left: 10px;
`;

const Title = Styled.div`
  font-weight: 700;
  margin-bottom: 5px;
`;

export default props => (
  <Wrapper>
    <Inner>
      <Title>An Error occured.</Title>
      {props.children}
    </Inner>
  </Wrapper>
);
