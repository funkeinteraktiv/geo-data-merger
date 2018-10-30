import React from 'react';
import Styled from 'styled-components';

const Widget = Styled.div`
  margin: 32px 0 16px 0;
  padding: 15px 0;
  border-top: 3px solid ${props => props.theme.colors.darkBackground};
`;

const WidgetTitleWrapper = Styled.div`
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
  font-size: 20px;
`;

const Subtitle = Styled.div`
  margin: 0 0 16px 0;
  color: ${props => props.theme.colors.darkgray};
  font-family: ${props => props.theme.fonts.mono};
  font-size: 14px;
`;

export default ({title, subtitle, step, children }) => (
  <Widget>
    <WidgetTitleWrapper>
      <Step>{step + 1}</Step>
      <Title>{title}</Title>
    </WidgetTitleWrapper>
    <Subtitle>{subtitle}</Subtitle>
    {children}
  </Widget>
);
