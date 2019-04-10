'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "a540b083deb14790b0d6c932fc99d4b0";
// faceListId=jsm
const uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/facelists/jsm";


const options = {
    uri: uriBase,
    body: '{"name": "group1", "userData": "", "recognitionModel": "recognition_02"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };

//facelist 생성
request.put(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log(body);
});
