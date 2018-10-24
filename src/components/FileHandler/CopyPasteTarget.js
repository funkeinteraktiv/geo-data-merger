import React, { PureComponent } from 'react';
import Styled from 'styled-components';

const Textarea = Styled.textarea`
  width: 100%;
  resize: none;
  height: 200px;
`;

class CopyPasteTarget extends PureComponent {
  render() {
    return (
      <div>
        <Textarea placeholder="Paste dataset here..." onChange={this.props.onChange} />
      </div>
    );
  }
}

export default CopyPasteTarget;
