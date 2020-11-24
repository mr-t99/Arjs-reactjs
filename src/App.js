import React, { Component } from 'react';
import './App.css';
import Ar from "./Components/ar-js/arjs";
import Upload from "./Components/uploadFile/uploadConten";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/home/home';
import { Navbar } from 'react-bootstrap';


class App extends Component {
  constructor() {
    super();
    this.state = {
      click: {
        home: true,
        upload: false,
        ar: false
      },
      nextPage: false,
      ar_data:null
    }
    this.arconten = this.arconten.bind(this);
  }
  home() {
    if (this.state.click.home === false) {
      this.setState({
        ...this.state,
        click: {
          home: true,
          upload: false,
          ar: false
        }
      })
    }
  }
  upload() {
    if (this.state.click.upload === false) {
      this.setState({
        ...this.state,
        click: {
          home: false,
          upload: true,
          ar: false
        }
      })
    }
  }
  ar() {
    if (this.state.click.ar === false) {
      this.setState({
        ...this.state,
        click: {
          home: false,
          upload: false,
          ar: true
        }
      })
    }
  }
  arconten(data){
    console.log(data);
    this.setState({
      ...this.setState,
      nextPage:!this.state.nextPage,
      ar_data:data
    })
  }
  render() {
    return (
      <Router>
        <div className="home">
          {!this.state.nextPage &&
            <div className="menu">
              <h1 className="intro">Webase Ar.js</h1>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand onClick={() => this.home()}>Home</Navbar.Brand>
                <Navbar.Brand onClick={() => this.upload()}>Upload</Navbar.Brand>
                <Navbar.Brand onClick={() => this.ar()}>Ar Conten</Navbar.Brand>
              </Navbar>
              {this.state.click.upload && <Upload type={false} />}
              {this.state.click.home && <Home />}
              {this.state.click.ar && <Upload type={true} arconten={this.arconten} />}
            </div>
          }
          {this.state.nextPage && <Ar data={this.state.ar_data} />}
        </div>
      </Router>
    );
  }
}

export default App;