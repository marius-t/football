import React, { Component } from 'react';
import axios from 'axios';
import Pusher from 'pusher-js';
import Formation442 from './Formation442';
import Formation3421 from './Formation3421';
import Formation4411 from './Formation4411';

let 
  pusherApp = null,
  pusherChannel = null;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formation: null,
      players: [],
      team: null,
      loading: true,
      API_KEY: process.env.REACT_APP_APP_KEY || null,
      API_CLUSTER: process.env.REACT_APP_APP_CLUSTER || null,
      API_CHANNEL: process.env.REACT_APP_CHANNEL || null,
      API_EVENT: process.env.REACT_APP_EVENT || null
    }

    if( [this.state.API_KEY, this.state.API_CLUSTER, this.state.API_CHANNEL, this.state.API_EVENT].includes(null) ) {
      throw new Error('Missing important .env variables');
    }

    pusherApp = new Pusher(this.state.API_KEY, { cluster: this.state.API_CLUSTER });
    pusherChannel = pusherApp.subscribe(this.state.API_CHANNEL);

    //Subscribe to pusher data in order to get update. Push the update to the state in order to reflect changes in the UI
    pusherChannel.bind(this.state.API_EVENT, (data) => {
      if( data ) {
        console.log( 'NEW DATA FROM PUSHER, FORMATION:', data.formation);
        this.setState({
          formation: data.formation || this.state.formation || null,
          players: data.players || this.state.players || null,
          team: data.team || this.state.team || null
        });
      }
    });

  };

  componentWillMount() {
    //Get initial formation
    axios({
      method: 'get',
      url: 'http://lineups.dev.fantech.io/',
    })
    .then(res => {
      if( res.status === 200 && res.data ) {
        this.setState({
          formation: res.data.formation || null,
          players: res.data.players || null,
          team: res.data.team || null
        });
      }  
    })
    .catch(function (error) {
      console.log( error );
    });
  };

  render() {
    const FORMATIONS = {
      442: <Formation442 {...this.state} />,
      3421: <Formation3421 {...this.state} />,
      4411: <Formation4411 {...this.state} />
    };
    return (
      <React.Fragment>
        <center>
          <h1 className="center">{this.state.team}</h1>
          <div className="wrapper">
            <div className="field">
              <div className="middle"></div>
              <div className="semi_top"></div>
              <div className="semi_bottom"></div>
              <div className="semi_top2"></div>
              <div className="semi_bottom2"></div>
              <div className="penalty top"></div>
              <div className="penalty middle"></div>
              <div className="penalty bottom"></div>
            
              {FORMATIONS[this.state.formation || 442]}
            </div>
          </div>
        </center>
      </React.Fragment>
    );
  };

}
