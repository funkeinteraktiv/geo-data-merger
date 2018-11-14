import React, { PureComponent } from 'react';
import Styled from 'styled-components';

import { getDownloadFileData } from '~/utils';

const PreviewWrapper = Styled.div`
  padding: 16px 0;
`;

const TextArea = Styled.textarea`
  border: 1px solid ${props => props.theme.colors.section};
  padding: 16px;
  resize: vertical;
  width: 100%;
  min-height: 200px;
  font-size: 14px;
  font-family: ${props => props.theme.fonts.mono};
  color: ${props => props.theme.colors.black};
`;

class Preview extends PureComponent {
  render() {
    if (!this.props.isActive) {
      return null;
    }

    const { data, filetype, excludeFields } = this.props;
    const dataAsString = getDownloadFileData(data, filetype, excludeFields);

    return (
      <PreviewWrapper>
        <TextArea value={dataAsString.data} readOnly />
      </PreviewWrapper>
    );
  }
}

export default Preview;
