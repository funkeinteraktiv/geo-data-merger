import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import { connect } from 'unistore/react';

import { mergedDataSelector, isBaseDataGeo, outputFileNameSelector } from '~/state/Selectors';
import { downloadFile } from '~/utils';

import Actions from '~/state/Actions';

import Section from '~/components/Section';
import Select from '~/components/Select';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import Preview from '~/components/Preview';

const DownloadWrapper = Styled.div`
  display: flex;
  flex-direction: column;
`;

const DownloadButton = Styled(Button)`
  width: 200px;
`;

const DownloadButtonWrapper = Styled.div`
  background: ${props => props.theme.colors.section};
  padding: 16px;
  margin-top: 16px;
`;

const CheckboxWrapper = Styled.div`
  background: ${props => props.theme.colors.section};
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const SectionDownload = Styled(Section)`
  background: #ff5050;
`;

const step = 2;

class DownloadSection extends PureComponent {
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
    const {
      baseData,
      setDownloadFormat,
      mergedData,
      downloadFormat,
      excludeFields,
      baseIsGeo,
      outputFileName
    } = this.props;

    const hasData = !!this.props.mergedData.length;
    const isActive = baseData.length > 0;
    const formats = baseIsGeo ?
      config.downloadFormats :
      config.downloadFormats.filter(d => !['geojson', 'topojson'].includes(d));

    return (
      <SectionDownload
        step={step}
        title={config.sections[step].title}
        subtitle={config.sections[step].subtitle}
        isActive={isActive}
      >
        {hasData ? this.renderCheckboxes() : null}
        <DownloadWrapper>
          <Select
            options={!isActive ? [] : formats}
            placeholder="Select format..."
            onChange={setDownloadFormat}
            disabled={!isActive}
            value={downloadFormat || 'default'}
          />
          <Preview
            data={mergedData}
            isActive={isActive}
            filetype={downloadFormat}
            excludeFields={excludeFields}
          />
          <DownloadButtonWrapper>
            <DownloadButton
              disabled={!mergedData || !mergedData.length}
              onClick={() => downloadFile(
                mergedData,
                downloadFormat,
                excludeFields,
                outputFileName
              )}
            >
              Save
            </DownloadButton>
          </DownloadButtonWrapper>
        </DownloadWrapper>
      </SectionDownload>
    );
  }
}

export default connect(state => ({
  baseData: state.baseData,
  mergedData: mergedDataSelector(state),
  downloadFormat: state.downloadFormat,
  excludeFields: state.excludeFields,
  baseIsGeo: isBaseDataGeo(state),
  outputFileName: outputFileNameSelector(state)
}), Actions)(DownloadSection);
