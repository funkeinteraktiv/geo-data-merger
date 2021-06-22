import React, { PureComponent } from 'react';
import Styled from 'styled-components';

const Textarea = Styled.textarea`
  width: 100%;
  resize: none;
  padding: 16px;
  border: 1px solid #eee;
  resize: vertical;
  min-height: 150px;
  height: 100%;
`;

const CopyPasteWrapper = Styled.div`
  background: ${(props) => props.theme.colors.section};
  padding: 16px;
  height: 200px;
`;

class CopyPasteTarget extends PureComponent {
  render() {
    return (
      <CopyPasteWrapper>
        <Textarea
          placeholder={this.props.placeholder}
          onChange={this.props.onChange}
        />
      </CopyPasteWrapper>
    );
  }
}

export default CopyPasteTarget;
