import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";

class DropzoneAreaExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files) {
    this.setState({
      files: files
    });
  }
  render() {
    return (
      <DropzoneArea
        onChange={this.handleChange.bind(this)}
        filesLimit={1}
        maxFileSize={1000000000}
        dropzoneText="Drag and Drop or Link to Doc Page"
      />
    );
  }
}

export default DropzoneAreaExample;
