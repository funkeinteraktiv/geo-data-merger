import React from 'react';
import Styled from 'styled-components';

const Widget = Styled.div`
  margin: 15px 0;
  background: #ddd;
  padding: 15px;
  border-radius: 5px;
`;

const Title = Styled.h2``;

export default ({ title, children }) => (
  <Widget>
    <Title>{title}</Title>
    {children}
  </Widget>
);
