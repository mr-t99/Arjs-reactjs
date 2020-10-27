import React, { Component } from 'react'

import "./ar.css";

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
                    <a-assets>
                        <video src="https://cors-anywhere.herokuapp.com/https://www.w3schools.com/html/mov_bbb.mp4"
                            preload="auto" id="vid" response-type="arraybuffer" loop
                            crossorigin webkit-playsinline autoplay muted playsinline>
                        </video>
                    </a-assets>

                    <a-nft
                        videohandler
                        type='nft' url='https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/data/dataNFT/pinball'
                        smooth="true" smoothCount="10" smoothTolerance="0.01" smoothThreshold="5"
                    >
                        <a-video
                            src="#vid"
                            position='50 150 -100'
                            width='300'
                            height='175'
                        >
                        </a-video>
                        {/* <a-image src="http://localhost:4000/getcontent/image/abc.jpg" rotation="-90 0 0" position="200 100 -150" width="450" height="225"></a-image> */}
                    </a-nft>
                    <a-entity camera></a-entity>
                </a-scene>
            </div>
        )
    }
}
