import React, { useState } from 'react';

function About() {
    var initialVal=0;
    var[num,setNum]= useState(initialVal)
    function handleDecrement(){
        setNum(num-1)
    }
    // function handleincrement(){
    //     setNum(num+1)
    // }
    return (
        <div>
            <h1>About Page</h1>
            <h2>State initial value is {initialVal}</h2>
            <button onClick={handleDecrement}>-</button>
            <h3>State Variable Value : {num}</h3>
            <button onClick={()=>setNum(num+1)}>+</button><br></br>
            <button onClick={()=>setNum(0)}>RESET</button>
        </div>
    );
}

export default About;