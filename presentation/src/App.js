import { Deck, Slide, Footer, Title, Subtitle, Image, List, Text, Browser, Video } from "@sambego/diorama";
import ImageWithTitle from "./components/ImageWithTitle";
import Multistep from "./components/Multistep";
import CodeSlide from "./components/CodeSlide";
import About from "./slides/About";
import ThankYou from "./slides/ThankYou";
import Temp from "./slides/Temp";

import ImgBeer from "./assets/beer.jpg";
import ImgGraphDevices from "./assets/graph_devices.png";
// import ImgGraphDevicesPop from "./assets/graph_devices_population.png";
import ImgThinking from "./assets/thinking.gif";
import ImgPBnJ from "./assets/pbj.jpg";
import ImgEspruino from "./assets/wifiespruino.jpg";
import ImgPi from "./assets/pi4.png";
import ImgInterlude from "./assets/interlude.jpg";
import ImgTilt from "./assets/tilt.jpg";
import ImgStages from "./assets/stages-iot-architecture.png";
import ImgDiagram from "./assets/iot-js-beer.png";
import ImgDiagramFunctions from "./assets/iot-js-beer-functions.png";
import ImgDiagramDatabase from "./assets/iot-js-beer-database.png";
import ImgTimeSeries from "./assets/TimeSeries.gif";
import ImgTimeSeries2 from "./assets/TimeSeries2.gif";
import ImgDiagramAggregation from "./assets/iot-js-beer-aggregation.png";
import ImgDiagramTriggers from "./assets/iot-js-beer-triggers.png";
import ImgDiagramCharts from "./assets/iot-js-beer-charts.png";
import ImgRealmFunction from "./assets/atlas-video-function-https.gif";
import ImgAggregation from "./assets/atlas-video-aggregation.gif";
import ImgTrigger from "./assets/atlas-video-trigger.gif";
import ImgCharts from "./assets/atlas-video-chart.gif";
import ImgMindBlown from "./assets/mindblown.gif";
import ImgSponsors from "./assets/sponsors.png";
import VidRobocalypse from "./assets/robocalypse.mp4";

import './App.css';

const SHOW_NOTES = false;

const talkProps = {
  title: "IoT, JS and Beer Brewing: 🍻",
  conference: "THAT Conference",
  conferenceHashTag: "#ThatConference",
  date: "July, 2022",
  moreInfoUrl: "http://ezurl.to/cheers"
}

//https://www.mongodb.com/developer/article/Paginations_Time_Series_Collections_in_five_minutes/

const footer = <Footer left={`@joel__lord ${talkProps.conferenceHashTag}`} right={`${talkProps.moreInfoUrl}`} />


function App() {
  return (
    <Deck swipeToChange={false} footer={footer} presenterNotes={SHOW_NOTES}>
      <ImageWithTitle 
        title={talkProps.title}
        img={ ImgBeer } 
        notes="."
        />

      <ImageWithTitle
        img={ ImgSponsors }
      />

      <ImageWithTitle 
        title={talkProps.title}
        img={ ImgBeer } 
        notes="."
      />

      <Slide>
        <Title>IoT Devices</Title>
        <Subtitle>¯\_(ツ)_/¯</Subtitle>
      </Slide>

      <Slide>
        <Subtitle>IoT Devices</Subtitle>
        <Image src={ImgGraphDevices} />
      </Slide>

      {/* <Slide>
        <Subtitle>IoT Devices</Subtitle>
        <Image src={ImgGraphDevicesPop} />
      </Slide> */}

      <ImageWithTitle
        img={ImgThinking}
        title="6 devices/person" 
        />

      <Multistep>
        <Title>My devices</Title>
        <List className="two-rows">
          <li style={{fontSize: "1.25em"}}>4 laptops</li>
          <li style={{fontSize: "1.25em"}}>2 cell phones</li>
          <li style={{fontSize: "1.25em"}}>2 tablets</li>
          <li style={{fontSize: "1.25em"}}>1 thermostat</li>
          <li style={{fontSize: "1.25em"}}>2 smoke detectors</li>
          <li style={{fontSize: "1.25em"}}>1 TV</li>
          <li style={{fontSize: "1.25em"}}>1 car</li>
          <li style={{fontSize: "1.25em"}}>4 smart bulbs</li>
          <li style={{fontSize: "1.25em"}}>3 connected plugs</li>
          <li style={{fontSize: "1.25em"}}>3 connected speakers</li>
          <li style={{fontSize: "1.25em"}}>3 cameras</li>
          <li style={{fontSize: "1.25em"}}>3 home assistants</li>
          <li style={{fontSize: "1.25em"}}>2 door locks</li>
          <li style={{fontSize: "1.25em"}}>1 garage door</li>
          <li style={{fontSize: "1.25em"}}>1 heated floor controller</li>
          <li style={{fontSize: "1.25em"}}>1 shower</li>
          <li style={{fontSize: "1.25em"}}>1 vacuum</li>
          <li style={{fontSize: "1.25em"}}>1 cat litter</li>
          <li style={{fontSize: "1.25em"}}>1 toothbrush</li>
          <li style={{fontSize: "1.25em"}}>2 fermenters</li>
        </List>
      </Multistep>

      <Slide>
        <Title>IoT Devices</Title>
        <Subtitle>¯\_(ツ)_/¯</Subtitle>
      </Slide>

      <About />

      <Slide>
        <Title>JavaScript IoT and Beer Brewing</Title>
        <List>
          <li>IoT and JavaScript</li>
          <li>Beer Brewing Basics</li>
          <li>Sensors and Data</li>
        </List>
      </Slide>

      <ImageWithTitle title="IoT and JS" subtitle="Like Pizza and Beer" img={ImgPBnJ} />

      <Slide>
        <Video src={VidRobocalypse} autoplay loop full />
      </Slide>

      <Slide>
        <Subtitle>JavaScript Everywhere!</Subtitle>
        <List>
          <li>Front-end</li>
          <li>Back-end</li>
          <li>Database</li>
          <li>IoT Device</li>
        </List>
      </Slide>

      <Slide>
        <Title>JS on Devices</Title>
        <List>
          <li>Arduino</li>
          <li>Espruino</li>
          <li>Raspberry Pi</li>
        </List>
      </Slide>

      <Slide>
        <Title>Espruino</Title>
        <Image src={ ImgEspruino } />
      </Slide>

      <Slide>
        <Title>Espruino</Title>
        <Text>Espruino WiFi is a tiny USB and WiFi-enabled microcontroller that can be programmed in JavaScript.<br/>Just plug it into your computer and get started in seconds with the Web IDE - no software installation needed!</Text>
        <Text><a href="https://www.espruino.com/WiFi">https://www.espruino.com/WiFi</a></Text>
      </Slide>

      <Slide>
        <Browser url="https://www.espruino.com/ide/" />
      </Slide>

      <CodeSlide title="Espruino" lang="javascript">
        {`
let status = false;

setInterval(() => {
  status = !status;
  console.log(\`LED is \${status ? "on" : "off"}\`);
  LED1.write(status);
}, 500);

        `}
      </CodeSlide>

      <Slide>
        <Title>Raspberry Pi</Title>
        <Image src={ ImgPi } />
      </Slide>

      <Slide>
        <Title>Raspberry Pi</Title>
        <Text>Your tiny, dual-display, desktop computer<br/>…and robot brains, smart home hub, media centre, networked AI core, factory controller, and much more</Text>
        <Text><a href="https://www.raspberrypi.org/products/raspberry-pi-4-model-b/">https://www.raspberrypi.org/products/raspberry-pi-4-model-b/</a></Text>
      </Slide>

      <CodeSlide title="Raspberry Pi">
        {`
npm install johnny-five 
npm install raspi-io
        `}
      </CodeSlide>

      <CodeSlide title="Raspberry Pi">
        {`
const five = require("../lib/johnny-five.js");
const Raspi = require("raspi-io").RaspiIO;
const board = new five.Board({
  io: new Raspi()
});

board.on("ready", () => {
  const led = new five.Led("P1-13");
  led.blink();
});
        `}
      </CodeSlide>

      <Slide>
        <Subtitle>Espruino vs Raspberry Pi</Subtitle>
      </Slide> 

      <Slide>
        <Subtitle>What About the Blues Wireless Notecard?</Subtitle>
      </Slide> 

      <ImageWithTitle title="Interlude" img={ImgInterlude} />

      <Slide>
        <Title>iSpindel</Title>
        <Image src={ImgTilt} />
      </Slide>

      <Slide>
        <Title>iSpindel</Title>
        <List>
          <li>Built on ESP 8266</li>
          <li>Accelerometer and Temperature sensors</li>
          <li>Transmits angle and temperature</li>
        </List>
      </Slide>

      <Slide>
        <Title>Then What?</Title>
        <Subtitle>¯\_(ツ)_/¯</Subtitle>
      </Slide>

      <Slide>
        <Title>It's all about the data</Title>
        <Text>Billions of devices == Trillions of bytes of data</Text>
      </Slide>

      <Slide>
        <Subtitle>Stages of IoT Architecture</Subtitle>
        <br/>
        <br/>
        <Image src={ImgStages} />
      </Slide>

      <Slide>
        <Image src={ImgDiagram} />
      </Slide>

      <Slide>
        <Image src={ImgDiagramFunctions} />
      </Slide>

      <Slide>
        <Title>Serverless</Title>
        <Subtitle>Atlas Functions</Subtitle>
      </Slide>

      <Slide>
        <Title>Serverless</Title>
        <Image src={ImgRealmFunction} />
      </Slide>

      <Slide>
        <Image src={ImgDiagramDatabase} />
      </Slide>

      <Slide>
        <Title>Database</Title>
        <Subtitle>MongoDB Atlas</Subtitle>
      </Slide>

      <Slide>
        <Title>Database</Title>
        <Subtitle>Time Series</Subtitle>
        <Image src={ImgTimeSeries} />
      </Slide>

      <Slide>
        <Title>Database</Title>
        <Subtitle>Time Series</Subtitle>
        <Image src={ImgTimeSeries2} />
      </Slide>

      <Slide>
        <Image src={ImgDiagramAggregation} />
      </Slide>

      <Slide>
        <Title>Querying</Title>
        <Subtitle>Aggregation Pipelines &amp; Functions</Subtitle>
      </Slide>

      <Slide>
        <Title>Querying</Title>
        <Image src={ImgAggregation} />
      </Slide>

      {/* <CodeSlide title="Aggregation Pipeline" lang="javascript">
{`
[
  {
      '$addFields': {
          'temp': {
              '$convert': { 'input': '$data.temp', 'to': 'int' }
          }, 
          'humidity': {
              '$convert': { 'input': '$data.humidity', 'to': 'int' }
          }
      }
  }, {
      '$group': {
          '_id': '$source', 
          'avgTemp': { '$avg': '$temp' }, 
          'avgHumidity': { '$avg': '$humidity' }
      }
  }
]
`}
      </CodeSlide>

      <CodeSlide title="Aggregation Pipeline" lang="javascript">
{`
fetch(URL)
  .then(response => response.json())
  .then(data => {
    this.setState(data);
  });
`}
      </CodeSlide> */}

      <CodeSlide title="Querying" lang="javascript">
{`
[
  { $match: { data.temp: { $ne: -1 } } },
  { $sort: { receivedAt: -1 } },
  { $limit: 1 },
  { $addFields: {
    temp: { $convert: { input: "$data.temp", to: "int" } },
    humidity: { $convert: { input: "$data.humidity", to: "int" } }
  } }, 
  { $project: { temp: 1, humidity: 1, receivedAt: 1 } }
]
`}
      </CodeSlide>

      <CodeSlide title="Querying" lang="javascript">
{`
fetch(URL)
  .then(response => response.json())
  .then(data => {
    let newState = Object.assign({}, this.state, data);
    this.setState(newState);
    setTimeout(this.getTemperature, 5000);
  });
`}
      </CodeSlide>

      <CodeSlide title="Watching for changes" lang="javascript">
{`
const collection = client.db("espruino").collection("incoming");
const changeStream = collection.watch();
changeStream.on('change', fullDocument => {
  let newState = Object.assign({}, this.state, fullDocument);
  this.setState(newState);
});
`}
      </CodeSlide>

      <Temp />

      <Slide>
        <Image src={ImgDiagramTriggers} />
      </Slide>
{/*
      <Temp withRealm={true} />

      <Slide>
        <Title>Notifications</Title>
        <Subtitle>Database Triggers</Subtitle>
      </Slide>
 */}
      <Slide>
        <Title>Triggers</Title>
        <Image src={ImgTrigger} />
      </Slide>

      <Slide>
        <Image src={ImgDiagramCharts} />
      </Slide>

      <Slide>
        <Title>Reporting</Title>
        <Subtitle>MongoDB Charts</Subtitle>
      </Slide>

      <Slide>
        <Title>Reporting</Title>
        <Image src={ImgCharts} />
      </Slide>

      <Slide>
        <Browser url="https://brainbrew.ca" />
      </Slide>

      <ImageWithTitle img={ImgMindBlown} />

      <Slide>
        <Title>Recap</Title>
        <List>
          <li>Iot and JavaScript 😍</li>
          <li>Beer Brewing Basics 🍻</li>
          <li>Sensors and Data ✅</li>
        </List>
      </Slide>

      <ThankYou 
        title={talkProps.title}
        conference={talkProps.conference}
        date={talkProps.date}
        moreInfoUrl={talkProps.moreInfoUrl}
      />
    </Deck>
  );
}

export default App;
