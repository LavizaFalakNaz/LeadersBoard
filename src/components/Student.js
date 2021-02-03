import React, { Component } from "react";
import "./student.css";

class Student extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      success: false
    };
  }

  componentDidMount() {
    this.setState({
      score: this.props.score
    });
    if (this.props.score >= 350) {
      this.setState({ success: true });
    } else {
      this.success = false;
    }
  }

  addScore() {
    this.setState(
      {
        score: this.state.score + 1
      },
      () => {
        if (this.state.score >= 350) {
          this.setState({ success: true });
        }
      }
    );
  }

  subtractScore() {
    this.setState(
      {
        score: this.state.score - 1
      },
      () => {
        if (this.state.score <= 300) {
          this.setState({ success: false });
        }
      }
    );
  }

  render() {
    const isSuccess = this.state.success;
    let text;
    if (isSuccess && this.state.score >= 350) {
      text = <span className="successSpan">Success</span>;
    } else if (!isSuccess && this.state.score <= 300) {
      text = <span className="failureSpan">Failure</span>;
    }
    return (
      <div className="student">
        <div className="left">
          <h2 className="studentname">
            {this.props.name}
            <button className="AddScore" onClick={() => this.addScore()}>
              +
            </button>
            <button
              className="SubtractScore"
              onClick={() => this.subtractScore()}
            >
              -
            </button>
          </h2>
          <p className="universityname">
            {this.props.University} {text}
          </p>
        </div>
        <div className="right">
          <div className="score">{this.state.score}</div>
        </div>
      </div>
    );
  }
}

export default Student;
