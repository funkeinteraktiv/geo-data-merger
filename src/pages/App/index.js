import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';

import Headline from '~/components/Headline';
import FileChooserSection from '~/sections/FileChooserSection';
import KeySelectSection from '~/sections/KeySelectSection';
import DownloadSection from '~/sections/DownloadSection';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const AppWrapper = Styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 32px 16px;
`;

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        <AppWrapper>
          <Headline />
          <FileChooserSection />
          <KeySelectSection />
          <DownloadSection />
        </AppWrapper>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
