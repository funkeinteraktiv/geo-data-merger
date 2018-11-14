import React, { PureComponent } from 'react';
import Styled from 'styled-components';

import Headline from '~/components/Headline';
import FileChooserSection from '~/sections/FileChooserSection';
import KeySelectSection from '~/sections/KeySelectSection';
import DownloadSection from '~/sections/DownloadSection';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const AppWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  min-height:100%;
`;

const AppInner = Styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 32px 16px;
  flex-grow: 1;
  width: 100%;
`;

class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <Header />
        <AppInner>
          <Headline />
          <FileChooserSection />
          <KeySelectSection />
          <DownloadSection />
        </AppInner>
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
