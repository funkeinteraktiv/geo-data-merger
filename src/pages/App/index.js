import React, { PureComponent } from 'react';
import { Box } from '@rebass/grid';

import Headline from '~/components/Headline';
import FileUploadWidget from '~/widgets/FileUploadWidget';
import KeySelectWidget from '~/widgets/KeySelectWidget';
import ResultWidget from '~/widgets/ResultWidget';
import DownloadWidget from '~/widgets/DownloadWidget';

class App extends PureComponent {
  render() {
    return (
      <Box
        mx="auto"
        css={{
          maxWidth: '1200px'
        }}
      >
        <Headline />
        <FileUploadWidget />
        <KeySelectWidget />
        <ResultWidget />
        <DownloadWidget />
      </Box>
    );
  }
}

export default App;
