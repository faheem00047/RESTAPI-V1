__path = process.cwd()

var express = require('express');
const axios = require('axios')
const { exec } = require('child_process')
const fs = require('fs')
const stream = require('stream')
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var router  = express.Router();
const zrapi = require("zrapi");

 
router.get('/audio', async (req, res, next) => {
if (!req.query.audioname) return 
var requestSettings = {
      url: `https://md-devs.xyz/audio/${req.query.audioname}.m4a`,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'audio/mp4');
      res.send(body);
   });
})


router.get('/textpro', async (req, res, next) => {
if (!req.query.text) return 
if (!req.query.number) return 
if (req.query.number == "25"){ var urlpro = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html"}

  zrapi.textpro(urlpro, [req.query.text])
  .then((data) => { 
  var requestSettings = {
      url: data,
      method: 'GET',
      encoding: null
   };
   request(requestSettings, function(error, response, body) {
      res.set('Content-Type', 'image/png');
      res.send(body);
   });
   })
})




module.exports = router
Give feedback
