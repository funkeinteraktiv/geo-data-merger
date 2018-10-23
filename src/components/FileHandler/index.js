import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Uppy from '@uppy/core';
import DragDrop from '@uppy/react/lib/DragDrop';
import styled from 'styled-components';

import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';

import { parseFile } from '~/utils';

const DragDropWrapper = styled.div`
  width: 100%;
`;

class FileHandler extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    className: PropTypes.string
  }

  static defaultProps = {
    onChange: () => {},
    className: ''
  }

  constructor() {
    super();

    this.uppy = Uppy({
      autoProceed: true,
      allowMultipleUploads: false,
      restrictions: {
        allowedFileTypes: ['.csv', '.geojson', '.json', '.topojson']
      }
    });

    this.uppy.on('file-added', (data) => {
      this.readFile(data);
    });
  }

  readFile(data) {
    const reader = new FileReader();

    reader.onload = () => {
      const content = reader.result;
      const result = parseFile(content);

      if (result) {
        this.props.onChange(result);
      }
    };

    reader.readAsText(data.data);
  }

  render() {
    return (
      <DragDropWrapper className={this.props.className}>
        <DragDrop uppy={this.uppy} />
      </DragDropWrapper>
    );
  }
}

export default FileHandler;
