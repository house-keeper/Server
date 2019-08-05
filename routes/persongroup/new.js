'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "6bc77c1f5ad742a2b57a1f0f809ec7d0";
//personGroupId=jsm
const uriBase = "https://koreacentral.api.cognitive.microsoft.com/face/v1.0/persongroups/housekeeper";

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
