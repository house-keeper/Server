'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "6bc77c1f5ad742a2b57a1f0f809ec7d0";
// personGroupId=jsm
// TODO: 해당 personGroupId 그때그때 변경되도록 수정
const uriBase = "https://koreacentral.api.cognitive.microsoft.com/face/v1.0/persongroups/housekeeper/persons";

// TODO: 해당 person의 name 그때그때 변경되도록 수정
var body =
`
{
    "name": "yuseon",
    "userData": "User-provided data attached to the person."
}
`;

// TODO: body의 이미지 url 그때그때 변경되도록 수정
const options = {
    uri: uriBase,
    body: body,
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };

//해당 group에 person 추가
//personId 반환
request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log(body);
});
