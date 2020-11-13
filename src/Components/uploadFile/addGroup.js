import groupApi from "../../api/groupApi";
import React, { Component, useEffect } from 'react';
import { Input, Button } from 'reactstrap';
const axios = require('axios').default;
const URL = process.env.REACT_APP_API_URL

// const post = ["bai 1", "bai 2", "bai 3", "bai 4", "bai 5"];


const option = ["Tạo mới", "Chọn bài"];


class addGroup extends Component {
    constructor() {
        super();
        this.state = {
            option: false,
            valueText:"",
            fistSelect: null,
            data:[]
        }
        this.onChangePost = this.onChangePost.bind(this);
        this.clickBtadd = this.clickBtadd.bind(this);
        this.clickBtselect = this.clickBtselect.bind(this);
        this.onChangText = this.onChangText.bind(this);
    }

    componentDidMount(){
        const a = async ()=>{
            try {
                const data = await groupApi.getAll();
                this.setState({
                    ...this.state, fistSelect:data[0], data:data
                })
            } catch (error) {
                console.log("err"+error)
            }
        };
        a()
    }

    onChangePost(ev) {
        let i;
        this.state.data.forEach((element, index) => {
            if(element.name === ev.target.value){
                i = index;
            }
        });
        this.setState({
            ...this.state,
            fistSelect:this.state.data[i]
        })
        
    }
    clickBtadd(ev) {
        if(!this.state.option){
            this.setState({
                option: true
            })
        }else{
            const data = async ()=>{
                const data = await groupApi.createGroup({name:this.state.valueText});
                alert(data.message);
                this.props.callBack(data.id_group);
            }
            data();
        }
    }
    clickBtselect(){
        if(this.state.option){
            this.setState({
                option: false
            })
        }
        else{
            this.props.callBack(this.state.fistSelect.id);
        }
    }
    onChangText(ev){
        this.setState({
            ...this.state.option,
            valueText: ev.target.value
        })
    }

   

    render() {
        const {data} = this.state;
        console.log(this.state)
        return (
            <div className='fromupload'>
                <h2>
                    Lựa chọn bài:
                </h2>
                {!this.state.option &&
                    <Input className="inputpost" type="select" name="select" id="exampleSelect" onChange={this.onChangePost}>
                        {data.map((value, index) => {
                            return <option key={index}>{value.name}</option>
                        })}
                    </Input>
                }
                {
                    this.state.option && <Input className="textbox" placeholder="Nhập tên Group" value={this.state.valueText} onChange={this.onChangText}></Input>
                }
                <div>
                    <Button color="info" onClick={this.clickBtselect}>{option[1]}</Button>
                    <Button className="add" color="info" onClick={this.clickBtadd}>{option[0]}</Button>
                </div>
            </div>
        );
    }
}

export default addGroup;