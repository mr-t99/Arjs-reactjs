import React, { Component } from 'react'
import Arcontent from "./arConten";

import "./ar.css";

const linkAsset = "https://cors-anywhere.herokuapp.com/https://www.w3schools.com/html/mov_bbb.mp4";
const nft = "https://ar-bdu.herokuapp.com/nft/avatar";

export default class arjs extends Component {
    render() {
        return (
            <div className="test">
                <div className="arjs-loader">
                    <div>Loading, please wait...</div>
                </div>
                <a-scene
                    vr-mode-ui="enabled: false;"
                    renderer='antialias: true; alpha: true; precision: mediump;'
                    embedded arjs='trackingMethod: best; sourceType: webcam; debugUIEnabled: false;'>

                    <Arcontent linkConten = {linkAsset} linkNft = {nft} />
                    <a-entity camera></a-entity>
                </a-scene>
            </div>
        )
    }
}
