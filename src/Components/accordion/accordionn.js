import React, { Component } from 'react';
import Controller from "../controller/controllerUser";
import { Alert } from 'reactstrap';
import "./accordionn.css"

class accordionn extends Component {
  constructor() {
    super();
    this.state = {
      isCollapsed: false
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    this.setState({
      isCollapsed: !this.state.isCollapsed
    })
  }
  render() {
    return (
      <div className="Accordion">
        <div className="header" onClick={this.onClick}>
          <Alert color="primary">
            <div className="option">
              Chọn bài
            </div>
          </Alert>
        </div>
        {this.state.isCollapsed && <div className="conten">
          <Controller />
        </div>}
      </div>
    );
  }
}

export default accordionn;