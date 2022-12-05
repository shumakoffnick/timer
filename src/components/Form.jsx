import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Form = ({setState}) => {
    const navigate = useNavigate()
    const [pomodoro, setPomodoro] = useState('')
    const [short, setShort] = useState('')
    const [long, setLong] = useState('')
    const [numb, setNumb] = useState('')
    const [obj, setObj] = useState({})
    const addValue = (e) =>{
        e.preventDefault()
        setObj({
            pomodoro,
            short,
            long,
            numb
        });
        setPomodoro('');
        setShort('');
        setLong('');
        setNumb('')
        navigate('/timer')
    }
    console.log(obj)
  return (
    <>
    <div className='form'>
        <div className='formBlock'>
            <form onSubmit={(e)=>addValue(e)}>
                <label>
                    <p>Pomodoro</p>
                    <input value={pomodoro} type='number' onChange={(e)=>setPomodoro(e.target.value)}/>
                </label>
                <label>
                    <p>Short Break</p>
                    <input value={short} type='number' onChange={(e)=>setShort(e.target.value)}/>
                </label>
                <label>
                    <p>Long Break</p>
                    <input value={long} type='number' onChange={(e)=>setLong(e.target.value)}/>
                </label>
                <label>
                    <p>Number of pomodoro between break</p>
                    <input value={numb} type='number' onChange={(e)=>setNumb(e.target.value)}/>
                </label>
                <div className='btnBlock'>
                <Link to='/'>
                    <button onClick={()=>setState(true)}>
                        close
                    </button></Link>
                    <button>save</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Form