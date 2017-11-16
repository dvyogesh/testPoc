import React, { Component } from 'react';
import { render } from 'react-dom';
import CommentList from './components/CommentList';
import Responsive from './components/Responsive';
import './styles/main.scss';

class Root extends Component {
  render() {
    return (
    <div className="container">
    	<Responsive />
    	<div className="sample"></div>
      <div > 
      	
        <h1>This another POC for Testing Enzyme chai moncha</h1>
        <CommentList/>
      </div>
    </div>
    );
  }
}

render(<Root />, document.getElementById('root'));
