import * as React from 'react';
import RNFetchBlob from "rn-fetch-blob";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function date(date_) {
  const date = date_.split('-');
  return date[2] + ' ' + months[date[1]-1] + ' ' + date[0];
}

export function getCurrentDate(){
  var date = new Date().getDate();
  var month = new Date().getMonth() + 1;
  var year = new Date().getFullYear();

  return year + '-' + month + '-' + date;
}

export function readingTime(time) {
  readingTime_ = time.split(':');
  return parseInt(readingTime_[0]) * 60 + parseInt(readingTime_[1]) +' 分鐘';
}

export function imagePath(image) {
  if(image&&image.includes('storage')) return 'https://dl.solutionforest.net/' + image;
  else return 'https://dl.solutionforest.net/storage/' + image;
}

export async function getBase64(image) {
  return new Promise((resolve, reject) => {
    const fs = RNFetchBlob.fs;
    let imagePath = null;
    let mime = '';
    RNFetchBlob.config({
      fileCache: true
    })
    .fetch("GET", image)
    .then(resp => {
      imagePath = resp.path();
      mime = 'data:' + resp.respInfo.headers['content-type'] + ';base64,';
      return resp.readFile("base64");
    })
    .catch((err) => {
      reject(err)
    })
    .then(base64Data => {
      console.log(mime+base64Data);
      fs.unlink(imagePath);
      resolve(mime+base64Data);
    })
  })
}



