import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import Styled from 'styled-components';

import { mergedDataSelector } from '~/state/Selectors';
import Actions from '~/state/Actions';
import Widget from '~/components/Widget';

const step = 3;

const CheckboxWrapper = Styled.div`
  background: ${props => props.theme.colors.section};
  padding: 16px;
  display: flex;
`;

const Checkbox = Styled.div`
  margin-bottom: 8px;
  margin-right: 16px;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.sans};
  display: flex;
  align-items: center;
  line-height: 1;

  input {
    margin-right: 8px;
    display: block:
  }
`;

const CheckboxLabel = Styled.label`
  display: block;
`;

class FieldSelectWidget extends PureComponent {
  renderCheckboxes() {
    return (
      <CheckboxWrapper>
        {this.props.mergedData.columns.map(columnName => (
          <Checkbox key={`FieldSelect__${columnName}`}>
            <input
              type="checkbox"
              checked={this.props.excludeFields.indexOf(columnName) === -1}
              onChange={() => this.props.toggleExcludeField(columnName)}
            />
            <CheckboxLabel>{columnName}</CheckboxLabel>
          </Checkbox>
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
