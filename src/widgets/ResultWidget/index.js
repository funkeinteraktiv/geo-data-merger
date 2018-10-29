import React, { Component } from 'react';
import { connect } from 'unistore/react';
import { Box } from '@rebass/grid';

import { mergedDataSelector } from '~/state/Selectors';

import DataTable from '~/components/DataTable';
import Widget from '~/components/Widget';

class ResultWidget extends Component {
  render() {
    return (
      <Widget step={3} title="Result">
        <Box width={1} px={2}>
          <DataTable data={this.props.resultData} />
        </Box>
      </Widget>
    );
  }
}

export default connect(state => ({
  resultData: mergedDataSelector(state)
}))(ResultWidget);
