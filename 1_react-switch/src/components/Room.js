import React, { Component } from 'react';
import './css/app.css';

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
          <h3>THE LIGHT IS </h3>
          <div className="status">
            <p>{this.state.isLit ? ' ON 💡' : ' OFF 🔦'}</p>
          </div>
          <button onClick={this.flipSwitch}>TURN {this.state.isLit ? ' OFF' : ' ON'}</button>
        </div>
      </div>
    );
  }
}

export default Room;