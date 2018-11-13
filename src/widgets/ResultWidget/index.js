import React, { Component } from 'react';
import { connect } from 'unistore/react';

import { mergedDataSelector } from '~/state/Selectors';

import DataTable from '~/components/DataTable';
import Widget from '~/components/Widget';

const step = 2;

class ResultWidget extends Component {
  render() {
    return (
      <Widget
        step={step}
        title={config.sections[step].title}
        subtitle={config.sections[step].subtitle}
        isActive={this.props.baseData.length > 0}
      >
        <DataTable data={this.props.resultData} excludeFields={this.props.excludeFields} />
      </Widget>
    );
  }
}

export default connect(state => ({
  resultData: mergedDataSelector(state),
  baseData: state.baseData,
  excludeFields: state.excludeFields
}))(ResultWidget);
