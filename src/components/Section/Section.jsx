import React, { Component } from 'react';

class Section extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <h2 className="statistics-title">{title}</h2>
        {children}
      </div>
    );
  }
}

export default Section;
