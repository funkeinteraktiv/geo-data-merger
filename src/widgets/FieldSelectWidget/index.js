import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';

import { mergedDataSelector } from '~/state/Selectors';
import Actions from '~/state/Actions';
import Widget from '~/components/Widget';

const step = 3;

class FieldSelectWidget extends PureComponent {
  renderCheckboxes() {
    return this.props.mergedData.columns.map(columnName => (
      <div key={`FieldSelect__${columnName}`}>
        <input
          type="checkbox"
          checked={this.props.excludeFields.indexOf(columnName) === -1}
          onChange={() => this.props.toggleExcludeField(columnName)}
        />
        {columnName}
      </div>
    ));
  }

  render() {
    const hasData = !!this.props.mergedData.length;

    return (
      <Widget
        step={step}
        title={config.sections[step].title}
        subtitle={config.sections[step].subtitle}
      >
        {hasData ? this.renderCheckboxes() : 'No data merged yet.'}
      </Widget>
    );
  }
}

export default connect(state => ({
  mergedData: mergedDataSelector(state),
  excludeFields: state.excludeFields
}), Actions)(FieldSelectWidget);
