import React, { Component } from 'react';
import './Feedback.css';

class FeedbackOptions extends React.Component {
  render() {
    const { options, onLeaveFeedback } = this.props;
    return (
      <div className="button-list">
        {options.map(option => (
          <button
            className="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}

export default FeedbackOptions;
