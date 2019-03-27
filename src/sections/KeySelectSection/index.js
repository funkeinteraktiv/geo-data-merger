import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import idx from 'idx';
import Styled from 'styled-components';

import Actions from '~/state/Actions';
import Select from '~/components/Select';
import Section from '~/components/Section';
import Row from '~/components/Row';
import Column from '~/components/Column';
import DataTable from '~/components/DataTable';
import { mergedDataSelector } from '~/state/Selectors';

const SelectWrapper = Styled.div`
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.section};
  padding: 16px;
`;

const MergedCountDisplay = Styled.div`
  margin-top: 16px;
  font-size: 15px;
`;

const step = 1;

class KeySelectSection extends PureComponent {
  render() {
    const {
      baseData, mergeData, baseKey, mergeKey,
      resultData, excludeFields
    } = this.props;
    const baseKeys = idx(baseData, _ => _.columns) || [];
    const mergeKeys = idx(mergeData, _ => _.columns) || [];
    const isActive = baseData.length > 0;

    return (
      <Section
        step={step}
        title={config.sections[step].title}
        subtitle={config.sections[step].subtitle}
        isActive={isActive}
      >
        <Row>
          <Column>
            <SelectWrapper>
              <Select
                options={baseKeys}
                onChange={this.props.setBaseKey}
                placeholder="Select key..."
                disabled={!isActive}
                value={baseKey || 'default'}
              />
            </SelectWrapper>
          </Column>
          <Column>
            <SelectWrapper>
              <Select
                options={mergeKeys}
                onChange={this.props.setMergeKey}
                placeholder="Select key..."
                disabled={mergeData.length === 0}
                value={mergeKey || 'default'}
              />
            </SelectWrapper>
          </Column>
        </Row>
        {isActive && <DataTable data={resultData.data} excludeFields={excludeFields} />}
        {isActive && mergeData.length && (
          <MergedCountDisplay>
            {resultData.count} of {mergeData.length} rows have been successfully merged.
          </MergedCountDisplay>
        )}
      </Section>
    );
  }
}

export default connect(state => ({
  baseData: state.baseData,
  mergeData: state.mergeData,
  baseKey: state.baseKey,
  mergeKey: state.mergeKey,
  resultData: mergedDataSelector(state),
  excludeFields: state.excludeFields
}), Actions)(KeySelectSection);
