import React, { Fragment } from 'react';
import Styled from 'styled-components';

import { media } from '~/styles/Utils';

const Headline = Styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = Styled.h1`
  margin: 0;
  font-weight: 400;
  font-size: 40px;

<<<<<<< HEAD
  @media screen and (min-width: 640px) {
    font-size: 60px
  }
=======
  ${media.m`
    font-size: 60px;
  `}
>>>>>>> f78023ab42da51915779014de5729055b2050899
`;

const Bold = Styled.span`
  font-weight: 900;
`;

const Subtitle = Styled.div`
  margin: 10px 0 20px 0;
  font-family: ${props => props.theme.fonts.mono};
`;

export default () => (
  <Fragment>
    <Headline>
      <Title>(Geo) <Bold>DataMerger</Bold></Title>
      <Subtitle>A small tool for merging datasets.</Subtitle>
    </Headline>
  </Fragment>
);
