'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "a540b083deb14790b0d6c932fc99d4b0";
// faceListId=jsm
const uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists/jsm/persistedFaces?";


// TODO: body의 이미지 url 그때그때 변경되도록 수정
const options = {
    uri: uriBase,
    body: '{"url": "https://image.mycelebs.com/celeb/new/sq/292948_sq_1495198784.jpg"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };

//facelist에 얼굴 추가
request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log(body);
});
