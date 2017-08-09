import React from 'react'
import axios from 'axios'

export const getData = () => {
    return new Promise(function (resolve, reject) {
        axios.get("http://localhost:3000/items")
            .then(res => {
                let shows = res.data.shows;
                console.log(shows);
                resolve(shows);
            })
            .catch(error => {
                reject(error);
            });
    });
}


export const getVisibleTiles = (shows,param) =>shows.filter((show,index) => (show.title.toLowerCase().includes(param)))
