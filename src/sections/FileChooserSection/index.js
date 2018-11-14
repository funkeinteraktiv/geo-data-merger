import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import Styled from 'styled-components';

import SwapIcon from '../../../public/images/swap.svg';
import Actions from '~/state/Actions';
import FileHandler from '~/components/FileHandler';
import DataTable from '~/components/DataTable';
import Section from '~/components/Section';
import ButtonLight from '~/components/ButtonLight';
import Row from '~/components/Row';
import Column from '~/components/Column';
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

class FileChooserSection extends PureComponent {
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
      <Section
        step={step}
        title={config.sections[step].title}
        subtitle={config.sections[step].subtitle}
      >
        <Row>
          <Column>
            <FileHandler
              onChange={this.props.setBaseData}
              onError={() => this.props.setError('base')}
              fileName={baseFileName}
              dropText="Drop base file here"
              textareaPlaceholder="Paste base data here ..."
            />
            {baseDataError && renderError()}
          </Column>
          <Column>
            <FileHandler
              onChange={this.props.setMergeData}
              onError={() => this.props.setError('merge')}
              fileName={mergeFileName}
              dropText="Drop merge file here"
              textareaPlaceholder="Paste merge data here ..."
              isActive={hasBaseData}
            />
            {mergeDataError && renderError()}
          </Column>
        </Row>

        <Row>
          <Column style={{ textAlign: 'center' }}>
            File 1
          </Column>
          <ButtonWrapper isVisible={(hasBaseData && hasMergeData)}>
            <ButtonLight onClick={this.props.swapData}>
              <SwapIcon height={16} />
            </ButtonLight>
          </ButtonWrapper>
          <Column style={{ textAlign: 'center' }}>
            File 2
          </Column>
        </Row>

        <Row isVisible={(hasBaseData || hasMergeData)}>
          <Column isVisible={hasBaseData}>
            <DataTable data={this.props.baseData} />
            {baseFileType.includes('csv') && this.renderCsvOptions('base')}
          </Column>
          <Column isVisible={hasMergeData} style={{ marginLeft: 'auto' }}>
            <DataTable data={this.props.mergeData} />
            {mergeFileType.includes('csv') && this.renderCsvOptions('merge')}
          </Column>
        </Row>
      </Section>
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
}), Actions)(FileChooserSection);
