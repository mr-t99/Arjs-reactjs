import React, { Component } from 'react';

class asset_ar extends Component {
    render() {
        const {id, vl} = this.props;
        console.log(id)
        return (
            <>
                <video src={vl}
                    preload="auto" id="abc" response-type="arraybuffer" loop
                    crossorigin webkit-playsinline autoplay muted playsinline>
                </video>
            </>
        );
    }
}

export default asset_ar;