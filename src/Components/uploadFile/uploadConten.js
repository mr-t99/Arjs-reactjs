import React, { Component } from 'react';
import UploadForm from "./formUpload";
import Group from "./addGroup";
import "./uploadConten.css"

class uploadConten extends Component {
    constructor() {
        super();
        this.state = {
            group: true,
            uploadImgae: false,
            uploadConten: false,
            uploadInfo: {
                idGroup: null,
                idImage: null
            }
        }
        this.checkGroup = this.checkGroup.bind(this);
        this.checkImg = this.checkImg.bind(this);
        this.checkConten = this.checkConten.bind(this);
    }
    checkGroup(data) {
        this.setState({
            ...this.state,
            group: false,
            uploadImgae:true,
            uploadInfo:{...this.state.uploadInfo, idGroup:data}
        });
    }
    checkImg(data){
        this.setState({
            ...this.state,
            uploadImgae: false,
            uploadConten:true,
            uploadInfo:{...this.state.uploadInfo, idImage:data}
        });
    }
    checkConten(data){
        
    }
    render() {
        console.log(this.state);
        return (
            <div className="groubUpload">
                {this.state.group && <Group callBack={this.checkGroup} />}
                {this.state.uploadImgae && <UploadForm option='Tải ảnh lên' note="Lưu ý hiện tại hệ thống chỉ hỗ trợ ảnh .png" link="http://localhost:4000/upload/image" callBack={this.checkImg} idGroup={this.state.uploadInfo.idGroup}/>}
                {this.state.uploadConten && <UploadForm option='Tải video lên' note="Video bạn muốn hiển thị cùng ảnh" link="http://localhost:4000/upload/video" callBack={this.checkConten} idImage={this.state.uploadInfo.idImage}/>}
            </div>
        );
    }
}

export default uploadConten;