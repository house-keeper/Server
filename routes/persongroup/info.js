'use strict';
const express = require('express');
const router = express.Router();
const request = require('request');
const subscriptionKey = "6bc77c1f5ad742a2b57a1f0f809ec7d0";
//personGroupId=jsm
const uriBase = "https://koreacentral.api.cognitive.microsoft.com/face/v1.0/persongroups/housekeeper-python/persons";

const options = {
    uri: uriBase,
    headers: {
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
  };

//person, face정보 조회
//등록 된 사람 얼굴의 personId, name, userData 및 persistedFaceIds를 포함하여 지정된 사람 그룹의 모든 사람 정보를 나열
request.get(options, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }
  console.log(JSON.stringify(JSON.parse(body), null, '  ')); //json형식으로 log출력
});
