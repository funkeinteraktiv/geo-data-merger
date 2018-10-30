import React, { Fragment } from 'react';
import Styled from 'styled-components';

const Title = Styled.h1`
  margin: 0;
  font-weight: 400;
`;

const Bold = Styled.span`
  font-weight: 700;
`;

const Subtitle = Styled.div`
  margin: 10px 0 20px 0;
  font-family: ${props => props.theme.fonts.mono};
`;

export default () => (
  <Fragment>
    <Title>(Geo) <Bold>DataMerger</Bold></Title>
    <Subtitle>A small tool for merging different Datasets together.</Subtitle>
  </Fragment>
);
