'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "a540b083deb14790b0d6c932fc99d4b0";
//personGroupId=jsm
const uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/jsm";

var body =
`
{
    "name": "group1",
    "userData": "",
    "recognitionModel": "recognition_02"
}
`;

const options = {
    uri: uriBase,
    body: body,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };

//PersonGroup 생성
request.put(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log(body);
});
