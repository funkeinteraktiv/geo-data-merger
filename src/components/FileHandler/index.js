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

import FileIcon from '../../../public/images/file.svg';
import { parseFile } from '~/utils';
import CopyPasteTarget from './CopyPasteTarget';

const StyledTabs = Styled(Tabs)`
  opacity: ${props => (props.isActive ? 1 : 0.25)};
  pointer-events: ${props => (props.isActive ? 'default' : 'none')};
`;

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
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

const FileWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 16px;
  width: 200px;
  border: 1px solid #ccc;
  border-bottom-color: #a3a3a3;
  border-radius: 4px;

  svg {
    width: 48px;
    height: 48px;
  }
`;

const FileName = Styled.div`
  font-size: 14px;
  margin-top: 10px;
`;

class FileHandler extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func,
    isActive: PropTypes.bool,
    dropText: PropTypes.string,
    textareaPlaceholder: PropTypes.string
  }

  static defaultProps = {
    onChange: () => {},
    isActive: true,
    dropText: 'Drop file here',
    textareaPlaceholder: 'Paste data here'
  }

  onDrop(acceptedFiles) {
    this.readFile(acceptedFiles[0]);
  }

  onPaste(evt) {
    const content = evt.target.value;
    const result = parseFile(content);

    if (result) {
      this.props.onChange({
        data: result,
        fileName: '',
        type: 'copy-paste'
      });
    }
  }

  readFile(file) {
    const reader = new FileReader();

    reader.onload = () => {
      const content = reader.result;
      const result = parseFile(content);

      if (result) {
        this.props.onChange({
          data: result,
          fileName: file.name,
          type: file.type
        });
      }
    };

    reader.readAsText(file);
  }

  renderFile() {
    if (!this.props.fileName) {
      return this.props.dropText;
    }

    return (
      <FileWrapper>
        <FileIcon />
        <FileName>{this.props.fileName}</FileName>
      </FileWrapper>
    );
  }

  render() {
    return (
      <StyledTabs isActive={this.props.isActive}>
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
            {this.renderFile() }
          </Dropzone>
        </TabPanel>

        <TabPanel>
          <CopyPasteTarget
            onChange={evt => this.onPaste(evt)}
            placeholder={this.props.textareaPlaceholder}
          />
        </TabPanel>
      </StyledTabs>
    );
  }
}

export default FileHandler;
