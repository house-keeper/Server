'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "6bc77c1f5ad742a2b57a1f0f809ec7d0";

const uriBase = "https://koreacentral.api.cognitive.microsoft.com/face/v1.0/identify";

var body =
`
{
    "personGroupId": "housekeeper",
    "faceIds": [
        "c6b9b35c-248b-4355-a1f4-18a43be6c103",
    ],
    "confidenceThreshold": 0.01
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

//1 대 다수 식별을 사용하여 사용자 얼굴의 가장 가까운 일치를 사람 그룹에서 찾음.
//identify전 detect해서 faceId 필요
request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log(JSON.stringify(JSON.parse(body), null, '  ')); //json형식으로 log출력
});
