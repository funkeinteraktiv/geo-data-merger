import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import Styled from 'styled-components';

import SwapIcon from '../../../public/images/swap.svg';
import Actions from '~/state/Actions';
import FileHandler from '~/components/FileHandler';
import DataTable from '~/components/DataTable';
import Widget from '~/components/Widget';
import ButtonLight from '~/components/ButtonLight';
import FileSectionWrapper from '~/components/FileSectionWrapper';
import FileSection from '~/components/FileSection';
import ErrorMessage from '~/components/ErrorMessage';
import Checkbox from '~/components/Checkbox';

const ButtonWrapper = Styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  width: 8%;

  button {
    width: 100%;
  }
`;

const step = 0;

function renderError() {
  return (
    <ErrorMessage>
      Please check if your data is valid json, csv, geojson or topojson.
    </ErrorMessage>
  );
}

class FileChooserWidget extends PureComponent {
  renderCsvOptions(fileType) {
    return (
      <Checkbox
        style={{ marginTop: '8px' }}
        checked={this.props[`${fileType}FirstRowHeader`]}
        onChange={() => this.props.toggleFirstRowHeader(fileType)}
        label="First row is header"
      />
    );
  }

  render() {
    const {
      baseData, baseFileName, baseDataError, baseFileType,
      mergeData, mergeFileName, mergeDataError, mergeFileType
    } = this.props;
    const hasBaseData = !!baseData.length;
    const hasMergeData = !!mergeData.length;

    return (
      <Widget
        step={step}
        title={config.sections[step].title}
        subtitle={config.sections[step].subtitle}
      >
        <FileSectionWrapper>
          <FileSection>
            <FileHandler
              onChange={this.props.setBaseData}
              onError={() => this.props.setError('base')}
              fileName={baseFileName}
              dropText="Drop base file here"
              textareaPlaceholder="Paste base data here ..."
            />
            {baseDataError && renderError()}
          </FileSection>
          <FileSection>
            <FileHandler
              onChange={this.props.setMergeData}
              onError={() => this.props.setError('merge')}
              fileName={mergeFileName}
              dropText="Drop merge file here"
              textareaPlaceholder="Paste merge data here ..."
              isActive={hasBaseData}
            />
            {mergeDataError && renderError()}
          </FileSection>
        </FileSectionWrapper>

        <FileSectionWrapper>
          <FileSection style={{ textAlign: 'center' }}>
            File 1
          </FileSection>
          <ButtonWrapper isVisible={(hasBaseData && hasMergeData)}>
            <ButtonLight onClick={this.props.swapData}>
              <SwapIcon style={{ width: '16px', height: '16px' }} />
            </ButtonLight>
          </ButtonWrapper>
          <FileSection style={{ textAlign: 'center' }}>
            File 2
          </FileSection>
        </FileSectionWrapper>

        <FileSectionWrapper isVisible={(hasBaseData || hasMergeData)}>
          <FileSection isVisible={hasBaseData}>
            {baseFileType.includes('csv') && this.renderCsvOptions('base')}
            <DataTable data={this.props.baseData} />
          </FileSection>
          <FileSection isVisible={hasMergeData} style={{ marginLeft: 'auto' }}>
            {mergeFileType.includes('csv') && this.renderCsvOptions('merge')}
            <DataTable data={this.props.mergeData} />
          </FileSection>
        </FileSectionWrapper>
      </Widget>
    );
  }
}

export default connect(state => ({
  baseData: state.baseData,
  baseFileName: state.baseFileName,
  baseFileType: state.baseFileType,
  baseDataError: state.baseDataError,
  baseFirstRowHeader: state.baseFirstRowHeader,
  mergeData: state.mergeData,
  mergeFileName: state.mergeFileName,
  mergeDataError: state.mergeDataError,
  mergeFileType: state.mergeFileType,
  mergeFirstRowHeader: state.mergeFirstRowHeader
}), Actions)(FileChooserWidget);
