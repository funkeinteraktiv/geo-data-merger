import React, { Component } from 'react';
import Styled from 'styled-components';
import { connect } from 'unistore/react';

import { mergedDataSelector, isBaseDataGeo } from '~/state/Selectors';
import { downloadFile } from '~/utils';
import { media } from '~/styles/Utils';

import Actions from '~/state/Actions';

import Widget from '~/components/Widget';
import Select from '~/components/Select';
import Button from '~/components/Button';

const DownloadWrapper = Styled.div`
  display: flex;
  padding: 16px;
  background: ${props => props.theme.colors.section};
`;

const DownloadInteraction = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  ${media.m`
    justify-content: center;
    flex-direction: row;
  `}
`;

const DownloadButton = Styled(Button)`
  width: 200px;
  margin-top: 10px;

  ${media.m`
    margin-left: 20px;
    margin-top: 0;
  `}
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
        isActive={baseData.length > 0}
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
            <DownloadButton
              disabled={!mergedData || !mergedData.length}
              onClick={() => downloadFile(mergedData, downloadFormat, excludeFields)}
            >
              Download
            </DownloadButton>
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
