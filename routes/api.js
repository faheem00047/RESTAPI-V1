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
if (req.query.number == "1"){ var urlpro = "https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html"} 
if (req.query.number == "2"){ var urlpro = "https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html"}
if (req.query.number == "3"){ var urlpro = "https://textpro.me/create-3d-giraffe-text-effect-online-1069.html"}
if (req.query.number == "4"){ var urlpro = "https://textpro.me/create-3d-style-glass-text-effect-online-1072.html"}
if (req.query.number == "5"){ var urlpro = "https://textpro.me/3d-business-sign-text-effect-1078.html"}
if (req.query.number == "6"){ var urlpro = "https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html"}
if (req.query.number == "7"){ var urlpro = "https://textpro.me/create-3d-comic-text-effects-online-1091.html"}
if (req.query.number == "8"){ var urlpro = "https://textpro.me/create-green-slime-text-effect-online-1097.html"}
if (req.query.number == "9"){ var urlpro = "https://textpro.me/create-3d-halloween-text-effects-online-1098.html"}
if (req.query.number == "10"){ var urlpro = "https://textpro.me/create-realistic-3d-text-effect-frozen-winter-1099.html"}
if (req.query.number == "11"){ var urlpro = "https://textpro.me/create-thunder-text-effect-online-881.html"}
if (req.query.number == "12"){ var urlpro = "https://textpro.me/create-neon-light-on-brick-wall-online-1062.html"}
if (req.query.number == "13"){ var urlpro = "https://textpro.me/neon-text-effect-online-879.html"}
if (req.query.number == "14"){ var urlpro = "https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html"}
if (req.query.number == "15"){ var urlpro = "https://textpro.me/create-glowing-neon-light-text-effect-online-free-1061.html"}
if (req.query.number == "16"){ var urlpro = "https://textpro.me/create-a-transformer-text-effect-online-1035.html"}
if (req.query.number == "17"){ var urlpro = "https://textpro.me/create-realistic-golden-text-effect-on-red-sparkles-online-1082.html"}
if (req.query.number == "18"){ var urlpro = "https://textpro.me/elegant-white-gold-3d-text-effect-online-free-1070.html"}
if (req.query.number == "19"){ var urlpro = "https://textpro.me/create-a-3d-luxury-metallic-text-effect-for-free-1071.html"}
if (req.query.number == "20"){ var urlpro = "https://textpro.me/create-a-3d-glossy-metal-text-effect-1019.html"}
if (req.query.number == "21"){ var urlpro = "https://textpro.me/write-text-on-foggy-window-online-free-1015.html"}
 
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
