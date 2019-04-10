'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "a540b083deb14790b0d6c932fc99d4b0";

// TODO: 각각의 faceID 그때그때 변경 시키는걸로 수정
const persistedFaces = "8d0496c0-7d6a-4fd7-959e-5e9f752c516f";
// faceListId=jsm
const uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists/jsm/persistedFaces/"+persistedFaces;



const options = {
    uri: uriBase,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };

//facelist에 있는 얼굴 삭제
request.delete(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }

  console.log(body);
});
