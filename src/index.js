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
// let leftfull = document.getElementById('leftfull')
// let rightfull = document.getElementById('rightfull') 
// href = (links[i].attributes.href === undefined) ? null : links[i].attributes.href.nodeValue.toString();
// let Miner5 = document.getElementById('Miner5')
// let Miner6 = document.getElementById('Miner6')
// let Miner8 = document.getElementById('Miner8')
// let Miner9 = document.getElementById('Miner9')
// let Miner10 = document.getElementById('Miner10')
window.addEventListener('scroll', function(){
    let value = window.scrollY
    moon.style.top = value * 1.05 + 'px'
    mountains_behind.style.top = value * 0.5 + 'px' 
    mountains_front.style.top = value * 0 + 'px'    
    left.style.top = document.getElementById('group-div').offsetTop  -value * 0.80 + 'px'
    right.style.top =  document.getElementById('group-div').offsetTop   -value * 0.80 + 'px' 
    // leftfull.style.top = document.getElementById('group-div').offsetTop  -value * 0.80 + 'px'
    // rightfull.style.top =  document.getElementById('group-div').offsetTop   -value * 0.80 + 'px' 
    // Miner5.style.top =  document.getElementById('section-1').offsetHeight  + 200 -value * 0.80 + 'px' 
    // Miner6.style.top =  document.getElementById('team').offsetTop  - 100 -value * 0.80 + 'px' 
    // Miner8.style.top = document.getElementById('team').offsetTop -  document.getElementById('faq').offsetHeight  + -value * 0.80 + 'px'  
    // Miner9.style.top = document.getElementById('team').offsetTop  -  document.getElementById('faq').offsetHeight*1.7  + -value * 0.80 + 'px' 
    // Miner10.style.top = document.getElementById('team').offsetTop  +  document.getElementById('faq').offsetHeight*3.1  + -value * 0.80 + 'px' 
}) 

stars()

function stars(){
    let count = 500; 
    let i = 0
    while( i< count){
        let star = document.createElement('i')
        let x = Math.floor(Math.random() * window.innerWidth )
        let y = Math.floor(Math.random() * window.innerHeight )
        let duration = Math.random() * 10
        let size = Math.random() * 2
        star.style.left = x+'px'
        star.style.animationDuration = 1+duration+'s'
        star.style.animationDelay = duration+'s'
        star.style.top = y+'px'
        star.style.width = 1+size+'px'
        star.style.height = 1+size+'px'
        document.getElementById('home').appendChild(star)
        i++
    }
} 