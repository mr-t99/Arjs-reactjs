import React, { Component } from 'react';

class arConten extends Component {
    render() {
        const {linkConten, linkNft} = this.props
        return (
            <>
                <a-assets>
                    <video src={linkConten}
                        preload="auto" id="vid" response-type="arraybuffer" loop
                        crossorigin webkit-playsinline autoplay muted playsinline>
                    </video>
                </a-assets>
                <a-nft
                    videohandler
                    type='nft' url={linkNft}
                    // type='nft' url='https://ar-bdu.herokuapp.com/nft/avatar'
                    smooth="true" smoothCount="10" smoothTolerance="0.01" smoothThreshold="5"
                >
                    <a-video
                        src="#vid"
                        rotation="-90 0 0" position="200 100 -150" width="450" height="225"
                    >
                    </a-video>
                </a-nft>
            </>
        );
    }
}

export default arConten;