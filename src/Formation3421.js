import React, { Component } from 'react';
//3421
export default class Formation3421 extends Component {
  render() {
    const 
      gk = this.props.players.find( player => { return player.formation_place === 1 }),
      defLeft = this.props.players.find( player => { return player.formation_place === 6 }),
      defCt = this.props.players.find( player => { return player.formation_place === 5 }),
      defRght = this.props.players.find( player => { return player.formation_place === 4 }),
      mdlLeft = this.props.players.find( player => { return player.formation_place === 2 }),
      mdlC1 = this.props.players.find( player => { return player.formation_place === 7 }),
      mdlC2 = this.props.players.find( player => { return player.formation_place === 8 }),
      mdlRght = this.props.players.find( player => { return player.formation_place === 3 }),
      offC1 = this.props.players.find( player => { return player.formation_place === 10 }),
      offC2 = this.props.players.find( player => { return player.formation_place === 11 }),
      off1C1 = this.props.players.find( player => { return player.formation_place === 9 });

    return (
      <React.Fragment>
        {/* 3421 */}
        <div className="player gk"><span>{gk? gk.name : null}</span></div>
        <div className="player def left"><span>{defLeft? defLeft.name : null}</span></div>
        <div className="player def ct"><span>{defCt? defCt.name : null}</span></div>
        <div className="player def rght"><span>{defRght? defRght.name : null}</span></div>
        <div className="player mdl left"><span>{mdlLeft? mdlLeft.name : null}</span></div>
        <div className="player mdl c1"><span>{mdlC1? mdlC1.name : null}</span></div>
        <div className="player mdl c2"><span>{mdlC2? mdlC2.name : null}</span></div>
        <div className="player mdl rght"><span>{mdlRght? mdlRght.name : null}</span></div>
        <div className="player off c1"><span>{offC1? offC1.name : null}</span></div>
        <div className="player off c2"><span>{offC2? offC2.name : null}</span></div>
        <div className="player off1 ct"><span>{off1C1? off1C1.name : null}</span></div>
      </React.Fragment>
    );
  };

}