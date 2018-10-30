import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel
} from 'react-tabs';
import ReactDropzone from 'react-dropzone';

import { parseFile } from '~/utils';
import CopyPasteTarget from './CopyPasteTarget';

const TabContainer = Styled(TabList)`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  > .react-tabs__tab {
    padding: 8px 16px;
    background: transparent;
    cursor: pointer;
    font-weight: 700;

    &:hover, &--selected {
      background: ${props => props.theme.colors.section};
    }
  }
`;

const Dropzone = Styled(ReactDropzone)`
  width: 100%;
  height: 200px;
  border-radius: 5px;
  background: ${props => props.theme.colors.section};
  padding: 16px;
`;

class FileHandler extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func
  }

  static defaultProps = {
    onChange: () => {}
  }

  onDrop(acceptedFiles) {
    this.readFile(acceptedFiles[0]);
  }

  onPaste(evt) {
    const content = evt.target.value;
    const result = parseFile(content);

    if (result) {
      this.props.onChange(result);
    }
  }

  readFile(file) {
    const reader = new FileReader();

    reader.onload = () => {
      const content = reader.result;
      const result = parseFile(content);

      if (result) {
        this.props.onChange(result);
      }
    };

    reader.readAsText(file);
  }

  render() {
    return (
      <Tabs>
        <TabContainer>
          <Tab>Upload File</Tab>
          <Tab>Copy & Paste</Tab>
        </TabContainer>

        <TabPanel>
          <Dropzone
            accept={['.geojson', '.csv', '.json', '.topojson']}
            onDrop={acceptedFiles => this.onDrop(acceptedFiles)}
            multiple={false}
          >
            Drop Dataset here
          </Dropzone>
        </TabPanel>

        <TabPanel>
          <CopyPasteTarget
            onChange={evt => this.onPaste(evt)}
          />
        </TabPanel>

      </Tabs>
    );
  }
}

export default FileHandler;
