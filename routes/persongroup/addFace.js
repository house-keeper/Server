'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "6bc77c1f5ad742a2b57a1f0f809ec7d0";

// TODO: 해당 personId 그때그때 변경되도록 수정
const personId = "c6b9b35c-248b-4355-a1f4-18a43be6c103"

// personGroupId=jsm
// TODO: 해당 personGroupId 그때그때 변경되도록 수정
const uriBase = "https://koreacentral.api.cognitive.microsoft.com/face/v1.0/persongroups/housekeeper/persons/" + personId + "/persistedFaces";

// TODO: body의 이미지 url 그때그때 변경되도록 수정
var body =
`
{
    "url": "https://img.seoul.co.kr/img/upload/2019/01/27/SSI_20190127204804_V.jpg"
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

//해당 person에 얼굴 추가
//persistedFaceId 반환
request.post(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log(body);
});
