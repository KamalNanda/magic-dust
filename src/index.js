import React from 'react';
import ReactDOM from 'react-dom'; 
import App from './App'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 
let moon = document.getElementById('moon') 
let mountains_behind = document.getElementById('mountains_behind') 
let mountains_front = document.getElementById('mountains_front')   

window.addEventListener('scroll', function(){
    let value = window.scrollY
    moon.style.top = value * 1.05 + 'px'
    mountains_behind.style.top = value * 0.5 + 'px' 
    mountains_front.style.top = value * 0 + 'px'     
   
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