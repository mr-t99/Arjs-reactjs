import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import "./controller.css";

//Controller view
const value = {
    content: [
        {
            name: "Bài 1", conten: [
                { name: "avatar", hrefNft: "https://ar-bdu.herokuapp.com/nft/avatar", hrefConten:"https://ar-bdu.herokuapp.com/getcontent/image/avatar.png" },
                { name: "twiter", hrefNft: "https://ar-bdu.herokuapp.com/nft/twiter", hrefConten:"https://ar-bdu.herokuapp.com/getcontent/image/twiter.png" },
            ]
        },
        {
            name: "Bài 2", conten: [
                { name: "name5", href: "localhost:4000//abc.abc" },
                { name: "name6", href: "localhost:4000//abc.abc" },
                { name: "name7", href: "localhost:4000//abc.abc" },
                { name: "name8", href: "localhost:4000//abc.abc" },
            ]
        }
    ]
}
export default class controllerUser extends Component {
    constructor(props) {
        super();
        this.state= {
            key:0,
            select:{
                post:value.content[0].name,
                conten:value.content[0].conten[0].name
            }
        }
        this.onChangePost = this.onChangePost.bind(this);
        this.onChangImage = this.onChangImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangePost(ev) {
        value.content.forEach((vl, index)=>{
            if(vl.name === ev.target.value){
                this.setState({
                    key : index,
                    select:{...this.state.select, post:value.content[index].name}
                })
            }
        })
    }
    onChangImage(ev){
        value.content[this.state.key].conten.forEach((vl, index)=>{
            if(vl.name === ev.target.value){
                this.setState({
                    ...this.state,
                    select:{...this.state.select, conten:value.content[this.state.key].conten[index].name}
                })
            }
        })
    }
    onSubmit(e){
        alert(this.state);
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <Form className="group" onSubmit={this.onSubmit}>
                    <div className="select">
                        <FormGroup className="selectPost">
                            <Label for="exampleSelect">Lựa chọn bài</Label>
                            <Input type="select" name="post" id="exampleSelect" onChange={this.onChangePost}>
                                {
                                    value.content.map((value, index) => {
                                        return <option key={index} >{value.name}</option>
                                    })
                                }
                            </Input>
                        </FormGroup>
                        <FormGroup className="selectImg">
                            <Label for="exampleSelect">Chọn hình</Label>
                            <Input type="select" name="image" id="exampleSelect" onChange={this.onChangImage}>
                                {
                                    value.content[this.state.key].conten.map((value, index) => {
                                        return <option key={index} >{value.name}</option>
                                    })
                                }
                            </Input>
                        </FormGroup>
                    </div>
                    <Button className="buttonSelect" color="primary" >Xác nhận</Button>{' '}
                    {/* <button>nhap</button> */}
                </Form>
            </div>

        )
    }
}
