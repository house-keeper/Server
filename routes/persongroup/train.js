'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "a540b083deb14790b0d6c932fc99d4b0";
// TODO: 해당 personGroupId 그때그때 변경되도록 수정
const uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/jsm/train";

const options = {
    uri: uriBase,
    headers: {
      'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };

request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log(body);
});
