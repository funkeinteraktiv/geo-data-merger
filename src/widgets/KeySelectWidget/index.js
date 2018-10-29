import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import { Flex, Box } from '@rebass/grid';
import idx from 'idx';

import Actions from '~/state/Actions';

import Select from '~/components/Select';
import Widget from '~/components/Widget';

class KeySelectWidget extends PureComponent {
  render() {
    const { baseData, mergeData } = this.props;
    const baseKeys = idx(baseData, _ => _.columns) || [];
    const mergeKeys = idx(mergeData, _ => _.columns) || [];

    return (
      <Widget step={2} title="Select keys">
        <Flex>
          <Box width={1 / 2} px={2}>
            <Flex bg="section" p={3} justifyContent="center">
              <Select
                options={baseKeys}
                onChange={this.props.setBaseKey}
                placeholder="Select key..."
              />
            </Flex>
          </Box>
          <Box width={1 / 2} px={2}>
            <Flex bg="section" p={3} justifyContent="center">
              <Select
                options={mergeKeys}
                onChange={this.props.setMergeKey}
                placeholder="Select key..."
              />
            </Flex>
          </Box>
        </Flex>
      </Widget>
    );
  }
}

export default connect(state => ({
  baseData: state.baseData,
  mergeData: state.mergeData
}), Actions)(KeySelectWidget);
