import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: Date.now() };
    while (Date.now() % 1000 !== 0) {}

    setInterval(this.tick(), 1000);
  }

  tick() {
    return () => {
      this.setState({ time: Date.now() });
    };
  }

  render() {
    let now = new Date(this.state.time);
    // debugger
    return (
      <div>{ now.toString() }</div>
    );
  }
}

export default Clock;
