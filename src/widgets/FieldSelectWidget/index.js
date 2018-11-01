import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import Styled from 'styled-components';

import { mergedDataSelector } from '~/state/Selectors';
import Actions from '~/state/Actions';
import Widget from '~/components/Widget';
import Checkbox from '~/components/Checkbox';

const step = 3;

const CheckboxWrapper = Styled.div`
  background: ${props => props.theme.colors.section};
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`;

class FieldSelectWidget extends PureComponent {
  renderCheckboxes() {
    return (
      <CheckboxWrapper>
        {this.props.mergedData.columns.map(columnName => (
          <Checkbox
            key={`FieldSelect__${columnName}`}
            checked={this.props.excludeFields.indexOf(columnName) === -1}
            onChange={() => this.props.toggleExcludeField(columnName)}
            label={columnName}
          />
        ))}
      </CheckboxWrapper>
    );
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
