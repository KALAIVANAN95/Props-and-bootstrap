import React from 'react';


const myName="KALAI";
const place ="Chennai";
const datas = "https://source.unsplash.com/user/erondu/300x300";
const time = new Date().toLocaleTimeString();

function Two() {
  return (
   
    <>

    <h3>This is Second example</h3>
    <p>This is my name{myName} and I am from {place}</p>
    <div  style={{display:'block',margin:'0 auto'}}>
    <img src={datas} alt='images'  style={{display:'block',margin:'0 auto'}} />
    <p>Current time is : {time}</p>
    <p>{Math.random()*100}</p>
    </div>
    
    
    
    
    
    </>
  )
}

export default Two
