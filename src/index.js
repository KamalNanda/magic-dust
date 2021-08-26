import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
let moon = document.getElementById('moon') 
let mountains_behind = document.getElementById('mountains_behind')
let mountains_front = document.getElementById('mountains_front') 
let left = document.getElementById('left')
let right = document.getElementById('right') 
window.addEventListener('scroll', function(){
    let value = window.scrollY
    moon.style.top = value * 1.05 + 'px'
    mountains_behind.style.top = value * 0.5 + 'px' 
    mountains_front.style.top = value * 0 + 'px'    
        left.style.top = document.getElementById('group-div').offsetTop  -value * 0.60 + 'px'
        right.style.top =  document.getElementById('group-div').offsetTop   -value * 0.60 + 'px'
         
    // stars.style.left = value * 0.25 + 'px'
   
}) 
