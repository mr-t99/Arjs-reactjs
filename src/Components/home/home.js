import React, { Component } from 'react';
import "./home.css"
import { Navbar } from 'react-bootstrap';
// import Ar from "../ar-js/arjs";
import Upload from "../uploadFile/uploadConten";

class home extends Component {


    render() {
        return (
            <div>
                <img src='https://ar-js-org.github.io/AR.js-Docs/intro-image.gif' />
            </div>
        );
    }
}

export default home;