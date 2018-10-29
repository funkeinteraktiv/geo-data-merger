import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';

import { mergedDataSelector } from '~/state/Selectors';
import Actions from '~/state/Actions';

import Widget from '~/components/Widget';

class FieldSelectWidget extends PureComponent {
  render() {
    const { mergedData, excludeFields, toggleExcludeField } = this.props;

    return (
      <Widget step={4} title="Select Output Fields">
        {mergedData.columns.map(columnName => (
          <div key={`FieldSelect__${columnName}`}>
            <input
              type="checkbox"
              checked={excludeFields.indexOf(columnName) === -1}
              onChange={() => toggleExcludeField(columnName)}
            />
            {columnName}
          </div>
        ))}
      </Widget>
    );
  }
}

export default connect(state => ({
  mergedData: mergedDataSelector(state),
  excludeFields: state.excludeFields
}), Actions)(FieldSelectWidget);
