'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "a540b083deb14790b0d6c932fc99d4b0";

// TODO: 해당 personId 그때그때 변경되도록 수정
const personId = "8b5bd6bf-bf8c-4aa9-98ea-8c4f925b9451"

// personGroupId=jsm
// TODO: 해당 personGroupId 그때그때 변경되도록 수정
const uriBase = "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/persongroups/jsm/persons/"+
personId+"/persistedFaces";

// TODO: body의 이미지 url 그때그때 변경되도록 수정
var body =
`
{
    "url": "https://image.mycelebs.com/celeb/new/sq/292948_sq_1495198784.jpg"
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
