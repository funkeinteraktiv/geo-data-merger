import React, { PureComponent, Fragment } from 'react';
import Styled from 'styled-components';

import Headline from '~/components/Headline';
import FileChooserWidget from '~/widgets/FileChooserWidget';
import KeySelectWidget from '~/widgets/KeySelectWidget';
import ResultWidget from '~/widgets/ResultWidget';
import FieldSelectWidget from '~/widgets/FieldSelectWidget';
import DownloadWidget from '~/widgets/DownloadWidget';
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
          <FileChooserWidget />
          <KeySelectWidget />
          <ResultWidget />
          <FieldSelectWidget />
          <DownloadWidget />
        </AppWrapper>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
