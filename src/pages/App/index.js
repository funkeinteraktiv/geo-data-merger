import React, { PureComponent } from 'react';
import { Box } from '@rebass/grid';

import Headline from '~/components/Headline';
import FileUploadWidget from '~/widgets/FileUploadWidget';
import KeySelectWidget from '~/widgets/KeySelectWidget';
import ResultWidget from '~/widgets/ResultWidget';
import FieldSelectWidget from '~/widgets/FieldSelectWidget';
import DownloadWidget from '~/widgets/DownloadWidget';

class App extends PureComponent {
  render() {
    return (
      <Box
        mx="auto"
        css={{
          maxWidth: '940px',
          padding: '0 16px'
        }}
      >
        <Headline />
        <FileUploadWidget />
        <KeySelectWidget />
        <ResultWidget />
        <FieldSelectWidget />
        <DownloadWidget />
      </Box>
    );
  }
}

export default App;
