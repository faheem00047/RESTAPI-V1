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
if (req.query.number == "21"){ var urlpro = "https://textpro.me/create-a-cloud-text-effect-in-the-sky-online-997.html"}
if (req.query.number == "22"){ var urlpro = "https://textpro.me/broken-glass-text-effect-free-online-1023.html"}
if (req.query.number == "23"){ var urlpro = "https://en.ephoto360.com/write-text-on-wet-glass-online-589.html"}
if (req.query.number == "24"){ var urlpro = "https://textpro.me/3d-luxury-gold-text-effect-online-1003.html"} 
if (req.query.number == "25"){ var urlpro = "https://textpro.me/horror-gift-text-effect-866.html"}
if (req.query.number == "26"){ var urlpro = "https://textpro.me/wood-text-effect-856.html"}
if (req.query.number == "27"){ var urlpro = "https://textpro.me/blood-text-on-the-frosted-glass-941.html"}
if (req.query.number == "28"){ var urlpro = "https://textpro.me/color-full-luxury-metal-text-effect-969.html"}
if (req.query.number == "29"){ var urlpro = "https://textpro.me/create-logo-joker-online-934.html"}
if (req.query.number == "30"){ var urlpro = "https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html"}
if (req.query.number == "31"){ var urlpro = "https://textpro.me/toxic-text-effect-online-901.html"}
if (req.query.number == "32"){ var urlpro = "https://textpro.me/dropwater-text-effect-872.html"}
if (req.query.number == "33"){ var urlpro = "https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html"}
if (req.query.number == "34"){ var urlpro = "https://textpro.me/rock-text-effect-online-915.html"}
if (req.query.number == "35"){ var urlpro = "https://textpro.me/glossy-carbon-text-effect-965.html"}
if (req.query.number == "36"){ var urlpro = "https://textpro.me/decorate-purple-text-effect-917.html"}
if (req.query.number == "37"){ var urlpro = "https://textpro.me/write-text-on-foggy-window-online-free-1015.html"}
if (req.query.number == "38"){ var urlpro = "https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html"}
if (req.query.number == "39"){ var urlpro = "https://textpro.me/deluxe-silver-text-effect-970.html"}
if (req.query.number == "40"){ var urlpro = "https://textpro.me/metal-dark-gold-text-effect-984.html"}
if (req.query.number == "41"){ var urlpro = "https://textpro.me/rusty-metal-text-effect-860.html"}
if (req.query.number == "42"){ var urlpro = "https://textpro.me/create-a-3d-rust-style-text-effect-online-1093.html"}
if (req.query.number == "43"){ var urlpro = "https://textpro.me/metal-dark-gold-text-effect-online-939.html"}
if (req.query.number == "44"){ var urlpro = "https://textpro.me/biscuit-text-effect-858.html"}
if (req.query.number == "45"){ var urlpro = "https://textpro.me/ice-cold-text-effect-862.html"}
if (req.query.number == "46"){ var urlpro = "https://textpro.me/create-winter-cold-snow-text-effect-online-1100.html"}
if (req.query.number == "47"){ var urlpro = "https://textpro.me/create-beautiful-3d-snow-text-effect-online-1101.html"} 
if (req.query.number == "48"){ var urlpro = "https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html"}
if (req.query.number == "49"){ var urlpro = "https://textpro.me/wicker-text-effect-online-932.html"}
if (req.query.number == "50"){ var urlpro = "https://textpro.me/decorative-glass-text-effect-891.html"}
if (req.query.number == "51"){ var urlpro = "https://textpro.me/fabric-text-effect-online-964.html"}
if (req.query.number == "52"){ var urlpro = "https://textpro.me/blue-glass-text-effect-908.html"}
if (req.query.number == "53"){ var urlpro = "https://textpro.me/fullcolor-balloon-text-effect-958.html"}
if (req.query.number == "54"){ var urlpro = "https://textpro.me/double-exposure-text-effect-black-white-976.html"}
if (req.query.number == "55"){ var urlpro = "https://textpro.me/write-in-sand-summer-beach-free-online-991.html"}
if (req.query.number == "56"){ var urlpro = "https://textpro.me/create-art-paper-cut-text-effect-online-1022.html"}
if (req.query.number == "57"){ var urlpro = "https://textpro.me/captain-america-text-effect-905.html"}
if (req.query.number == "58"){ var urlpro = "https://textpro.me/captain-america-text-effect-905.html"}
if (req.query.number == "59"){ var urlpro = "https://textpro.me/denim-text-effect-online-919.html"}
if (req.query.number == "60"){ var urlpro = "https://textpro.me/natural-leaves-text-effect-931.html"}

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
