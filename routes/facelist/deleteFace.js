'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "6bc77c1f5ad742a2b57a1f0f809ec7d0";

// TODO: 각각의 faceID 그때그때 변경 시키는걸로 수정
const persistedFaces = "0476b063-3b79-456e-bd13-099489302585";
const personId = "348ed7ad-dc0f-4c64-bc51-8675929a3785";
// faceListId=jsm
const uriBase = "https://koreacentral.api.cognitive.microsoft.com/face/v1.0/persongroups/housekeeper-python/persons/"+personId+"/persistedFaces/"+persistedFaces;



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
