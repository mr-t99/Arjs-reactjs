import React, { Component } from 'react'
import groupApi from "../../api/groupApi";
import './ar.css';
import Asset from "./asset_ar";
import Nft from "./nftar";

export default class arjs extends Component {
    constructor(props) {
        super();
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        const a = async () => {
            try {
                const data = await groupApi.data(this.props.data);
                this.setState({
                    data: data
                })
            } catch (error) {
                console.log("err" + error)
            }
        };
        a()
    }
    render() {
        console.log(this.state.data[0]);
        return (
            <div className="test">
                <div className="arjs-loader">
                    <div>Loading, please wait...</div>
                </div>
                <a-scene
                    vr-mode-ui="enabled: false;"
                    renderer='antialias: true; alpha: true; precision: mediump;'
                    embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'>

                    <a-assets>
                        {
                            this.state.data.map((value, index)=>{
                                return <Asset id={value.id_img} vl={value.link_conten}/>   
                            })
                        } 
                    </a-assets>
                    {
                        this.state.data.map((value, index) => {
                            return <Nft key={index} id={value.id_img} nftlink={value.link_nft} link_conten={value.link_conten} />
                        })
                    }
                    {/* <Nft id={this.state.data[0].id_img} nftlink={this.state.data[0].link_nft} link_conten={this.state.data[0].link_conten} /> */}
                    {/* <a-entity camera></a-entity> */}
                </a-scene>
            </div>
        )
    }
}
