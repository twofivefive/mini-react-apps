import React, { Component } from 'react';
import './css/room.css';

class Room extends Component {
  state = {
    isLit: true,
  }
  
  flipSwitch = () => {
    this.setState({
      isLit: !this.state.isLit
    })
  }

  render() {
    const isLit = this.state.isLit ? 'on' : 'off';
    
    return (
      <div className="container">
        <div className={`room ${isLit}`}>
          <p>THE LIGHT IS </p>
          <div className="status">
            <h1>{isLit.toUpperCase()}</h1>
          </div>
          <button onClick={this.flipSwitch}>TURN {isLit === 'on' ? ' OFF' : ' ON'}</button>
        </div>
      </div>
    );
  }
}

export default Room;