const { default: axiosClient } = require("./axiosApi");

const groupApi = {
    getAll: ()=>{
        const url='/getcontent/group';
        return axiosClient.get(url);
    },
    createGroup:(data)=>{
        const url = '/upload/creategroup';
        return axiosClient.post(url, data);
    }
}

export default groupApi;