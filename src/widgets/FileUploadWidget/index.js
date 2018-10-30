import React, { PureComponent } from 'react';
import { connect } from 'unistore/react';
import Styled from 'styled-components';

import Actions from '~/state/Actions';
import FileHandler from '~/components/FileHandler';
import DataTable from '~/components/DataTable';
import Widget from '~/components/Widget';
import Button from '~/components/Button';
import FileSectionWrapper from '~/components/FileSectionWrapper';
import FileSection from '~/components/FileSection';

const ButtonWrapper = Styled.div`
  width: 8%;

  button {
    width: 100%;
  }
`;

const step = 0;

class FileUploadWidget extends PureComponent {
  render() {
    const { baseData, mergeData } = this.props;
    const hasData = !!(baseData.length && mergeData.length);

    return (
      <Widget
        step={step}
        title={config.sections[step].title}
        subtitle={config.sections[step].subtitle}
      >
        <FileSectionWrapper>
          <FileSection>
            <FileHandler onChange={this.props.setBaseData} />
          </FileSection>
          <FileSection>
            <FileHandler onChange={this.props.setMergeData} />
          </FileSection>
        </FileSectionWrapper>

        {hasData && (
          <FileSectionWrapper>
            <FileSection style={{ textAlign: 'center' }}>
              File 1 (Base)
            </FileSection>
            <ButtonWrapper>
              <Button onClick={this.props.swapData}>Swap</Button>
            </ButtonWrapper>
            <FileSection style={{ textAlign: 'center' }}>
              File 2
            </FileSection>
          </FileSectionWrapper>
        )}

        {hasData && (
          <FileSectionWrapper>
            <FileSection>
              <DataTable data={this.props.baseData} />
            </FileSection>
            <FileSection>
              <DataTable data={this.props.mergeData} />
            </FileSection>
          </FileSectionWrapper>
        )}
      </Widget>
    );
  }
}

export default connect(state => ({
  baseData: state.baseData,
  mergeData: state.mergeData
}), Actions)(FileUploadWidget);
