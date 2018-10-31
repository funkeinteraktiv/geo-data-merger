import React, { Component } from 'react';
import Styled from 'styled-components';
import { connect } from 'unistore/react';

import { mergedDataSelector, isBaseDataGeo } from '~/state/Selectors';
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
      setDownloadFormat,
      mergedData,
      downloadFormat,
      excludeFields,
      baseIsGeo
    } = this.props;

    const isDisabled = baseData.length === 0;
    const formats = baseIsGeo ?
      config.downloadFormats :
      config.downloadFormats.filter(d => !['geojson', 'topojson'].includes(d));

    return (
      <Widget
        step={step}
        title={config.sections[step].title}
        subtitle={config.sections[step].subtitle}
      >
        <DownloadWrapper>
          <DownloadInteraction>
            <Select
              options={isDisabled ? [] : formats}
              placeholder="Select format..."
              onChange={setDownloadFormat}
              disabled={isDisabled}
              value={downloadFormat || 'default'}
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
  mergedData: mergedDataSelector(state),
  downloadFormat: state.downloadFormat,
  excludeFields: state.excludeFields,
  baseIsGeo: isBaseDataGeo(state)
}), Actions)(DownloadWidget);
