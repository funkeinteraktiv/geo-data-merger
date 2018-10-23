import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import { Flex, Box } from '@rebass/grid';

import Actions from '~/state/Actions';

import FileHandler from '~/components/FileHandler';
import DataTable from '~/components/DataTable';
import Widget from '~/components/Widget';

class FileUploadWidget extends PureComponent {
  render() {
    return (
      <Widget title="Step 1: Upload your files">
        <Flex>
          <Box width={1 / 2} px={2}>
            <FileHandler onChange={this.props.setBaseData} />
          </Box>
          <Box width={1 / 2} px={2}>
            <FileHandler onChange={this.props.setMergeData} />
          </Box>
        </Flex>

        <Flex>
          <Box width={1 / 2} px={2}>
            <DataTable data={this.props.baseData} />
          </Box>
          <Box width={1 / 2} px={2}>
            <DataTable data={this.props.mergeData} />
          </Box>
        </Flex>
      </Widget>
    );
  }
}

export default connect(state => ({
  baseData: state.baseData,
  mergeData: state.mergeData
}), Actions)(FileUploadWidget);
