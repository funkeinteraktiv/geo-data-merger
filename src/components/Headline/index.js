import React, { Fragment } from 'react';
import Styled from 'styled-components';

const Title = Styled.h1`
  margin: 0;
`;

const Subtitle = Styled.p`
  margin: 10px 0 20px 0;
`;

export default () => (
  <Fragment>
    <Title>(Geo)DataMerger</Title>
    <Subtitle>A small tool for merging different Datasets together.</Subtitle>
  </Fragment>
);
