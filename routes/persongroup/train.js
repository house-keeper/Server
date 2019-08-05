'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "6bc77c1f5ad742a2b57a1f0f809ec7d0";
// TODO: 해당 personGroupId 그때그때 변경되도록 수정
const uriBase = "https://koreacentral.api.cognitive.microsoft.com/face/v1.0/persongroups/housekeeper/train";

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
