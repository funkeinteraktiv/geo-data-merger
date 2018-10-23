import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Headline from '~/components/Headline';
import FileUploadWidget from '~/widgets/FileUploadWidget';

const AppWrapper = styled.div`
  position: relative;
  padding: 0 15px;
  max-width: 1200px;
  margin: 0 auto;
`;

class App extends PureComponent {
  render() {
    return (
      <AppWrapper>
        <Headline />
        <FileUploadWidget />
      </AppWrapper>
    );
  }
}

export default App;
