import React from 'react';
import Styled from 'styled-components';

const Section = Styled.div`
  margin: 32px 0 16px 0;
  padding: 15px 0;
  border-top: 3px solid ${props => (props.isActive ? props.theme.colors.darkBackground : props.theme.colors.interactionInactive)};

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitleWrapper = Styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`;

const Step = Styled.div`
  background: ${props => (props.isActive ? props.theme.colors.interaction : props.theme.colors.interactionInactive)};
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
  color: ${props => (props.isActive ? props.theme.colors.black : props.theme.colors.darkgray)};
  font-size: 15px;
  line-height: 1.3;
`;

export default ({
  title, subtitle, step, children, isActive = true, className
}) => (
  <Section isActive={isActive} className={className}>
    <SectionTitleWrapper isActive={isActive}>
      <Step isActive={isActive}>{step + 1}</Step>
      <Title isActive={isActive}>{title}</Title>
    </SectionTitleWrapper>
    <Subtitle isActive={isActive} dangerouslySetInnerHTML={{ __html: subtitle }} />
    {children}
  </Section>
);
