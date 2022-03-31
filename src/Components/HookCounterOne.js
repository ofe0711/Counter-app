import React, { useEffect, useState } from 'react';

function HookCounterOne({}) {
    const initialState = 0
    const [count, setCount] = useState(initialState)
    const [startCount, setStartCount] = useState(false);

    useEffect(() => {
      let update = null;
      if (startCount){
          update = setInterval(() => {
            setCount((count) => count + 1)
          }, 1000);
      }
      return () => {
        clearInterval(update)
      };
    }, [startCount]);

    const buttonClick = () => {
      setStartCount(true)
    };
    const pauseClick = () => {
        setStartCount(false)
    };
    
    const stopClick = () => {
      setCount(initialState)
    }
  return (
  <div className='button'>
      <p>{count}</p>
      <button onClick={buttonClick} className='btn'>Start</button>
      <button onClick={pauseClick} className='btn'>Pause</button>
      <button onClick={stopClick} className='btn'>Reset</button>
  </div>
  );
}

export default HookCounterOne;
