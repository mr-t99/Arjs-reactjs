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
                        // type='nft' url='https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/data/dataNFT/pinball'
                        type='nft' url='https://ar-bdu.herokuapp.com/nft/avatar'
                        smooth="true" smoothCount="10" smoothTolerance="0.01" smoothThreshold="5"
                    >
                        {/* <a-video
                            src="#vid"
                            rotation="-90 0 0" position="200 100 -150" width="450" height="225"
                        >
                        </a-video> */}
                        <a-image src="https://ar-bdu.herokuapp.com/getcontent/image/avatar.png" rotation="-90 0 0" position="200 100 -150" width="450" height="225"></a-image>
                    </a-nft>

                    {/* test */}
                    <a-nft
                        videohandler
                        type='nft' url='https://arjs-cors-proxy.herokuapp.com/https://raw.githack.com/AR-js-org/AR.js/master/data/dataNFT/pinball'
                        // type='nft' url='https://ar-bdu.herokuapp.com/nft/avatar'
                        smooth="true" smoothCount="10" smoothTolerance="0.01" smoothThreshold="5"
                    >
                        <a-video
                            src="#vid"
                            rotation="-90 0 0" position="200 100 -150" width="450" height="225"
                        >
                        </a-video>
                    </a-nft>
                    <a-entity camera></a-entity>
                </a-scene>
            </div>
        )
    }
}
