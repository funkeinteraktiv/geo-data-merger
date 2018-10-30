import React, { Component } from 'react';
import Styled from 'styled-components';
import { connect } from 'unistore/react';

import { mergedDataSelector } from '~/state/Selectors';
import { downloadFile } from '~/utils';

import Actions from '~/state/Actions';

import Widget from '~/components/Widget';
import Select from '~/components/Select';
import Button from '~/components/Button';

const DownloadWrapper = Styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
  background: ${props => props.theme.colors.section};
`;

const DownloadInteraction = Styled.div`
  display: flex;
`;

const step = 4;

class DownloadWidget extends Component {
  render() {
    const {
      baseData,
      mergeData,
      setDownloadFormat,
      mergedData,
      downloadFormat,
      excludeFields
    } = this.props;

    return (
      <Widget
        step={step}
        title={config.sections[step].title}
        subtitle={config.sections[step].subtitle}
      >
        <DownloadWrapper>
          <DownloadInteraction>
            <Select
              options={config.downloadFormats}
              placeholder="Select download format..."
              onChange={setDownloadFormat}
              disabled={(baseData.length === 0 && mergeData.length === 0)}
            />
            <Button
              disabled={!mergedData || !mergedData.length}
              onClick={() => downloadFile(mergedData, downloadFormat, excludeFields)}
              style={{ marginLeft: '20px', width: '200px' }}
            >
              Download
            </Button>
          </DownloadInteraction>
        </DownloadWrapper>
      </Widget>
    );
  }
}

export default connect(state => ({
  baseData: state.baseData,
  mergeData: state.mergeData,
  mergedData: mergedDataSelector(state),
  downloadFormat: state.downloadFormat,
  excludeFields: state.excludeFields
}), Actions)(DownloadWidget);
