import React, { useEffect, useState } from 'react'
import { getTime } from '../helpers/getTime'
import { Link } from 'react-router-dom'
const Timer = ({setnewState}) => {
    const [state, setState] = useState(false)
    const [time, setTime] = useState(25 * 60)
    const minutes = getTime(Math.floor(time / 60));
    const second = getTime(time - minutes * 60)
    useEffect(()=>{
        const interval = setInterval(()=>{
            state && setTime((time)=> (time >= 1 ? time - 1 : 0))
        }, 1000);
        if(time === 0){setTime(false)}
        return ()=>{
            clearInterval(interval)
        }
    }, [state, time])
    const handleStart = ()=>{
        setState(!state)
    }
    const handleStop = ()=>{
        setState(!state);
        setTime(25 * 60)
    }
    const handlePause = ()=>{
        setState(!state)
    }
  return (
    <>
    <div className={state ? "active" : "timer"}>
        <Link className='linkBack' onClick={()=> setnewState(true)} to='/'>
        <div>Back</div>
        </Link>
        <div className='timeBlock'>
            <div className='theTime'>
            <span>{minutes}</span>
            <span>:</span>
            <span>{second}</span>
            </div>
        </div>
        <div className='blockButton'>
            {state ? <><button onClick={handleStop}>Stop</button>
        <button className='pause' onClick={handlePause}>Pause</button></> : <button onClick={handleStart}>Start</button>}
        </div>
    </div>
    </>
  )
}

export default Timer