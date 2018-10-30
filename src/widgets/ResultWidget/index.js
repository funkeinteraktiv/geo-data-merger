import React, { Component } from 'react';
import { connect } from 'unistore/react';

import { mergedDataSelector } from '~/state/Selectors';

import DataTable from '~/components/DataTable';
import Widget from '~/components/Widget';

class ResultWidget extends Component {
  render() {
    return (
      <Widget step={3} title="Result">
        <DataTable data={this.props.resultData} />
      </Widget>
    );
  }
}

export default connect(state => ({
  resultData: mergedDataSelector(state)
}))(ResultWidget);
