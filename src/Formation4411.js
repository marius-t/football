import React, { Component } from 'react';
// 4411
export default class Formation4411 extends Component {
  render() {
    const 
      gk = this.props.players.find( player => { return player.formation_place === 1 }),
      defLeft = this.props.players.find( player => { return player.formation_place === 2 }),
      defC1 = this.props.players.find( player => { return player.formation_place === 5 }),
      defC2 = this.props.players.find( player => { return player.formation_place === 6 }),
      defRght = this.props.players.find( player => { return player.formation_place === 3 }),
      mdlLeft = this.props.players.find( player => { return player.formation_place === 7 }),
      mdlC1 = this.props.players.find( player => { return player.formation_place === 4 }),
      mdlC2 = this.props.players.find( player => { return player.formation_place === 8 }),
      mdlRght = this.props.players.find( player => { return player.formation_place === 11 }),
      offC1 = this.props.players.find( player => { return player.formation_place === 10 }),
      offC2 = this.props.players.find( player => { return player.formation_place === 9 });

    return (
      <React.Fragment>
        {/* 4411 */}
        <div className="player gk"><span>{gk? gk.name : null}</span></div>
        <div className="player def left"><span>{defLeft? defLeft.name : null}</span></div>
        <div className="player def c1"><span>{defC1? defC1.name : null}</span></div>
        <div className="player def c2"><span>{defC2? defC2.name : null}</span></div>
        <div className="player def rght"><span>{defRght? defRght.name : null}</span></div>

        <div className="player mdl left"><span>{mdlLeft? mdlLeft.name : null}</span></div>
        <div className="player mdl c1"><span>{mdlC1? mdlC1.name : null}</span></div>
        <div className="player mdl c2"><span>{mdlC2? mdlC2.name : null}</span></div>
        <div className="player mdl rght"><span>{mdlRght? mdlRght.name : null}</span></div>

        <div className="player off ct"><span>{offC1? offC1.name : null}</span></div>
        <div className="player off1 ct"><span>{offC2? offC2.name : null}</span></div>
      </React.Fragment>
    );
  };

}
