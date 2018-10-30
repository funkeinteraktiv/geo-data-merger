import React from 'react';
import Styled from 'styled-components';

const Widget = Styled.div`
  margin: 15px 0;
  padding: 15px 0;
  border-top: 3px solid ${props => props.theme.colors.black};
`;

const WidgetTitle = Styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Step = Styled.div`
  background: ${props => props.theme.colors.interaction};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  line-height: 1;
  margin-right: 16px;
  border-radius: 50%;
  font-weight: 700;
`;

const Title = Styled.h2`
  margin: 0;
`;

export default ({ title, step, children }) => (
  <Widget>
    <WidgetTitle>
      <Step>{step}</Step>
      <Title>{title}</Title>
    </WidgetTitle>
    {children}
  </Widget>
);
