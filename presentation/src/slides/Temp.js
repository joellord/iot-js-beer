
import React, { Component } from "react";
import { Slide, Title, Text } from "@sambego/diorama";
import * as Realm from "realm-web";

const REALM_ID = "brainbrew-admbw";

export default class Temp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temp: 0,
      humidity: 0,
      lastTimestamp: "00:00:00"
    }

    this.getTemperature = this.getTemperature.bind(this);
    this.watchTemp = this.watchTemp.bind(this);
  }

  componentDidMount() {
    if (!this.props.withRealm) this.getTemperature();
    else this.watchTemp();
  }

  getTemperature() {
    let URL = "https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/brainbrew-admbw/service/getLatest/incoming_webhook/temperature";
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        let newState = Object.assign({}, this.state, {
          temp: data[0].temp.$numberInt,
          humidity: data[0].humidity.$numberInt
        });
        let ts = parseInt(data[0].receivedAt.$date.$numberLong);
        let lastTimestamp = (new Date(ts)).toLocaleTimeString();
        newState.lastTimestamp = lastTimestamp;
        this.setState(newState);
        setTimeout(this.getTemperature, 5000);
      });
  }

  async watchTemp() {
    const app = new Realm.App({ id: REALM_ID });
    const credentials = Realm.Credentials.anonymous();
    let user = await app.logIn(credentials);

    const mongodb = user.mongoClient("mongodb-atlas");
  
    let temps = mongodb.db("espruino").collection("incoming");
  
  
    (async () => {
      for await (const change of temps.watch()) {
        let doc = change.fullDocument;
        let newState = Object.assign({}, this.state, {
          temp: doc.data.temp,
          humidity: doc.data.humidity
        });
        let lastTimestamp = (new Date(doc.receivedAt)).toLocaleTimeString();
        newState.lastTimestamp = lastTimestamp;
        this.setState(newState);
      }
    })();
  }

  render() {
    let { temp, humidity, lastTimestamp } = this.state;
    return (
      <Slide>
        <Title>Fetch Data</Title>
        <Text>Temperature: {temp}&deg;C</Text>
        <Text>Humidity: {humidity}%</Text>
        <Text>Data Received at: {lastTimestamp}</Text>
      </Slide>
    )
  }
}