import React, { Component } from 'react';
import { Flex, Box } from '@rebass/grid';
import { connect } from 'unistore/react';

import { mergedDataSelector } from '~/state/Selectors';
import { downloadFile } from '~/utils';

import Actions from '~/state/Actions';

import Widget from '~/components/Widget';
import Select from '~/components/Select';
import Button from '~/components/Button';

class DownloadWidget extends Component {
  render() {
    const { setDownloadFormat, mergedData, downloadFormat } = this.props;

    return (
      <Widget title="Step 4: Download">
        <Flex>
          <Box width={1 / 2} px={2}>
            <Select
              options={config.downloadFormats}
              placeholder="Select download format..."
              onChange={setDownloadFormat}
            />
          </Box>
          <Box width={1 / 2} px={2}>
            <Button
              disabled={!mergedData || !mergedData.length}
              onClick={() => downloadFile(mergedData, downloadFormat)}
            >
              Download
            </Button>
          </Box>
        </Flex>
      </Widget>
    );
  }
}

export default connect(state => ({
  mergedData: mergedDataSelector(state),
  downloadFormat: state.downloadFormat
}), Actions)(DownloadWidget);
