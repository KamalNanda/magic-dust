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
var links = document.querySelector('.header ul li a');
let mountains_front = document.getElementById('mountains_front') 
let left = document.getElementById('left')
let right = document.getElementById('right') 
// href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();

window.addEventListener('scroll', function(){
    let value = window.scrollY
    moon.style.top = value * 1.05 + 'px'
    mountains_behind.style.top = value * 0.5 + 'px' 
    mountains_front.style.top = value * 0 + 'px'    
    left.style.top = document.getElementById('group-div').offsetTop  -value * 0.80 + 'px'
    right.style.top =  document.getElementById('group-div').offsetTop   -value * 0.80 + 'px'
    // if(value > document.getElementById('header').offsetTop && value < document.getElementById('home').offsetHeight){
    //   document.querySelector('a[href^="#home"]').classList.add('active')
    // } else{
    //   document.querySelector('a[href^="#home"]').classList.remove('active') 
    // }
    // if(value > document.getElementById('section-2').offsetTop 
    //     && value < document.getElementById('section-2').offsetHeight){
    //   document.querySelector('a[href^="#section-1"]').classList.add('active')
    // } else{
    //   document.querySelector('a[href^="#section-1"]').classList.remove('active') 
    // }
    // if(value > document.getElementById('section-2').offsetTop 
    //     && value < document.getElementById('section-3').offsetTop){
    //   document.querySelector('a[href^="#section-2"]').classList.add('active')
    // } else{
    //   document.querySelector('a[href^="#section-2"]').classList.remove('active') 
    // }
    // if(value > document.getElementById('roadmap').offsetTop 
    //     && value < document.getElementById('faq').offsetTop){
    //   document.querySelector('a[href^="#section-3"]').classList.add('active')
    // } else{
    //   document.querySelector('a[href^="#section-3"]').classList.remove('active') 
    // }
    // stars.style.left = value * 0.25 + 'px'
   
}) 
