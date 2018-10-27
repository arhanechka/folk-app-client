import axios from 'axios'
const url = "http://localhost:3000";

export class axiosAPI{
    constructor(){}

    getHomeInformation(){
        return axios.get(`${url}/home`)
        .then(response => response);
    }

    getAboutInformation(){
        return axios.get(`${url}/about`)
        .then(response => response);
    }

    getAudioInformation(){
        return axios.get(`${url}/audio`)
        .then(response => response);
    }

    getVideoInformation(){
        return axios.get(`${url}/home`)
        .then(response => response);
    }

}