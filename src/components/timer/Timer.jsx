import { useRef, useState, useEffect } from 'react';

export const Timer = () => {
  const [time, setTime] = useState(0);
   
    const timerRef = useRef(null)

  let timer

  useEffect(() => {
    timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return()=>{
        stop()
    }
  }, [time]);

  const stopTimer = () =>{
    console.log();
    clearInterval(timerRef.current) 
  }
  
  return (
    <div>
      <p>{time}</p>
      <button onClick={stopTimer} type="button">stop</button>
    </div>
  );
};
