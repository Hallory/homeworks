import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Number(props.time),
      isRunning: props.autostart || false
    };

  }

  componentDidMount() {
    if (this.state.isRunning) {
      this.startTimer()
    }
  }

  componentWillUnmount() {
      clearInterval(this.timerID);
        
  }

  startTimer = () => {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        time: Math.max(0, prevState.time - Number(this.props.step))
      }));

      if (this.state.time === 0) {
        this.props.onTimeEnd();
        clearInterval(this.timerID);
      }
    }, Number(this.props.step));
    this.props.onTimeStart();

  };

  pauseTimer = () => {
    clearInterval(this.timerID);
    this.setState({ isRunning: false });
    this.props.onTimePause();
  };

  resumeTimer = () => {
    this.setState({ isRunning: true }, this.startTimer);
  };

  render() {
    const { time, isRunning } = this.state;

    return (
      <div>
        <p>Залишилось часу: {time} мс</p>
        {isRunning ? (
          <button onClick={this.pauseTimer}>Пауза</button>
        ) : (
          <button onClick={this.resumeTimer}>Старт</button>
        )}
      </div>
    );
  }
}

export default Timer;