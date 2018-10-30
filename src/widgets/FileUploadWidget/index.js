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

const ButtonWrapper = Styled.div`
  display: ${props => (props.isVisible ? 'block' : 'none')};
  width: 8%;

  button {
    width: 100%;
  }
`;

const step = 0;

class FileUploadWidget extends PureComponent {
  render() {
    const { baseData, baseFileName, mergeData, mergeFileName } = this.props;
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
            <FileHandler onChange={this.props.setBaseData} fileName={baseFileName} />
          </FileSection>
          <FileSection>
            <FileHandler onChange={this.props.setMergeData} fileName={mergeFileName} />
          </FileSection>
        </FileSectionWrapper>

        <FileSectionWrapper isVisible={(hasBaseData || hasMergeData)}>
          <FileSection isVisible={hasBaseData} style={{ textAlign: 'center' }}>
            File 1 (Base)
          </FileSection>
          <ButtonWrapper isVisible={(hasBaseData && hasMergeData)}>
            <ButtonLight onClick={this.props.swapData}>
              <SwapIcon style={{ width: '16px', height: '16px' }} />
            </ButtonLight>
          </ButtonWrapper>
          <FileSection isVisible={hasMergeData} style={{ textAlign: 'center' }}>
            File 2
          </FileSection>
        </FileSectionWrapper>

        <FileSectionWrapper isVisible={(hasBaseData || hasMergeData)}>
          <FileSection isVisible={hasBaseData}>
            <DataTable data={this.props.baseData} />
          </FileSection>
          <FileSection isVisible={hasMergeData} style={{ marginLeft: 'auto' }}>
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
  mergeData: state.mergeData,
  mergeFileName: state.mergeFileName
}), Actions)(FileUploadWidget);
