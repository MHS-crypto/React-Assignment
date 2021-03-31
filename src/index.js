import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Gender from './UseState';
import MediaState from './MediaState';
import instagram from './Images/news.jpeg'

ReactDOM.render(
  <div>
  <App Name = "Muhammad Hassan Shafiq" Age ={21} /> <br/> <br/>
  <Gender/> 
  <MediaState title="React Fundamentals" body="React is an amazing library
  for developing front end of web applications. It makes work easier
  using the concepts of componenets" imgURL={{instagram}} />

  

  </div>,
  document.getElementById('root')
);

