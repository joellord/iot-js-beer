var WIFI_NAME = "lan-solo";
var WIFI_OPTIONS = {
  password: "188doris"
};
const DHT_PIN = B1;
let dht = require("DHT11").connect(DHT_PIN);


var wifi = require("Wifi");
const DELAY = 5000;

LED1.write(false);
LED2.write(false);

wifi.connect(WIFI_NAME, WIFI_OPTIONS, function(err) {
  if (err) {
    console.log("Connection error: " + err);
    LED1.write(true);
    return;
  }
  console.log("Connected!");

  getTemperature();
});

function getUrl(data, useHTTP2HTTPSservice) {
  const HTTP2HTTPS_SERVICE = "http://http2https.com";
  const WEBHOOK_URL = "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/brainbrew-admbw/service/incomingHook/incoming_webhook/espruino";
  let url = "";
  if (useHTTP2HTTPSservice) url += `${HTTP2HTTPS_SERVICE}/`;
  url += WEBHOOK_URL;
  url += "?";
  let keys = Object.keys(data);
  keys.map(key => {
    url += `${key}=${encodeURIComponent(JSON.stringify(data[key]))}&`;
  });
  return url;
}

function sendData(sensorData) {
  LED2.write(true);
  let data = {
    timestamp: new Date(),
    data: sensorData,
    source: "espruino"
  };
  let url = getUrl(data, true);
  require("http").get(url, function(res) {
    console.log("Response: ", res);
    res.on('data', function(d) {
      console.log("---> " + d);
    });

    LED2.write(false);
    setTimeout(getTemperature, DELAY);
  });
}

function getTemperature() {
  dht.read(data => {
    const temp = data.temp.toString();
    const humidity = data.rh.toString();

    sendData({
      temp: temp,
      humidity: humidity
    });
  });
}