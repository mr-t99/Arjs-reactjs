import React, { Component } from 'react';
import "./home.css"
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

class home extends Component {
    render() {
        return (
            <div className="home">
                <div className="menu">
                    <img src='https://ar-bdu.herokuapp.com/getcontent/image/avatar.png' />
                    <h1>chào mừng đến với ar.js</h1>
                    <Breadcrumb>
                        <BreadcrumbItem><a href="#">Tạo nội dung</a></BreadcrumbItem>
                        <BreadcrumbItem><a href="#">Nội dung Ar</a></BreadcrumbItem>
                        <BreadcrumbItem active>Data</BreadcrumbItem>
                    </Breadcrumb>
                </div>
            </div>
        );
    }
}

export default home;