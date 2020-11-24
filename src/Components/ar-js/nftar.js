import React, { Component } from 'react';

class nftar extends Component {
    render() {
        const { id, nftlink, link_conten } = this.props;
        return (
            <>
                <a-nft
                    videohandler
                    type='nft' url={nftlink}
                    smooth="true" smoothCount="10" smoothTolerance="0.01" smoothThreshold="5"
                >
                    {/* <a-video
                        src={`#${id}`}
                        rotation="-90 0 0"
                        position="200 200 -150"
                        width="450"
                        height="225">'
                    </a-video> */}
                    <a-video src="#abc"
                    rotation="-90 0 0" 
                    position="200 200 -150" 
                    width="450" 
                    height="225">
                    </a-video>
                </a-nft>
            </>
        );
    }
}

export default nftar;