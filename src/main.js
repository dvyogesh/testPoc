import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentList from './components/CommentList';

class Root extends Component {
  render() {
    return (
      <div className="container"> 
        <h1>This another POC for Testing Enzyme chai moncha</h1>
        <CommentList/>
      </div>
    );
  }
}

render(<Root />, document.getElementById('root'));
