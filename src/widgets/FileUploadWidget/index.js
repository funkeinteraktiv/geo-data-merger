import React, { PureComponent } from 'react';

import FileHandler from '~/components/FileHandler';

class FileUploadWidget extends PureComponent {
  render() {
    return (
      <div>
        <FileHandler onChange={data => console.log(data)} />
        <FileHandler />
      </div>
    );
  }
}

export default FileUploadWidget;
