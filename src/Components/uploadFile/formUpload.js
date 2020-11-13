import imageApi from "../../api/imageApi";
import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

let linkUpload;

class uploadFile extends Component {
  constructor(props) {
    super();
    this.state = {
      selectedFile: null
    }
    this.onFileChange = this.onFileChange.bind(this);
    this.onFileUpLoad = this.onFileUpLoad.bind(this);
  }
  onFileChange(ev) {
    this.setState({
      selectedFile: ev.target.files[0]
    })
  }
  onFileUpLoad() {
    const data = new FormData();
    data.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    if (this.props.idGroup === undefined) {
      data.append("idGroup", this.props.idImage)
      axios.post(this.props.link, data).then((res) => {
        alert(res.data.object.message)
      })
    }
    else {
      data.append("idGroup", this.props.idGroup)

      axios.post(this.props.link, data).then((res) => {
        alert(res.data.object.message)
        if (res.data.object.status === 200) {
          this.props.callBack(res.data.object.info.idImage);
        }
      })
    }

  }
  render() {
    const { option, note } = this.props;
    return (
      <div className='fromupload'>
        <h1>
          {option}
        </h1>
        <h4>{note}</h4>
        <div>
          <input type="file" onChange={this.onFileChange} />
          <Button color="secondary" onClick={this.onFileUpLoad} >Upload!</Button>{' '}
        </div>
        {
        }
      </div>
    );
  }
}

export default uploadFile;