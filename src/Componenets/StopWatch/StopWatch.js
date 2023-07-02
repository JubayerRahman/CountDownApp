import React, { useEffect, useState } from 'react'
import "./StopWatch.css"

const StopWatch = () => {
    const [inputValue, setinputValue] = useState("")
    const [btn1Class, setBtn1Class] = useState("buttonActive")
    const [btn2Class, setBtn2Class] = useState("buttonHide")
    const [btn3Class, setBtn3Class] = useState("buttonActive")
    const [inputClass, setInputClass]  = useState ("inputShow")
    const [countDown, setCountDown] = useState()
    const [timerActive, settimerActive] = useState(false)
    const [resultClass, setresultClass] = useState("resultHide")


    // startFunction
    const startFunction =()=>{
        if(inputValue===""){
            alert("Give me Minuts to count")
        }
        if(inputValue!==""){
            if(btn2Class==="buttonHide"){
                setBtn1Class("buttonHide")
                setBtn2Class("buttonActive")
                setCountDown(inputValue*60)
                settimerActive(true)
                setInputClass("inputHide")
                setresultClass("resultShow")
            }
        }
    }

    // Pause Function
    const pauseFunction =()=>{
        if (btn1Class==="buttonHide") {
            setBtn1Class("buttonActive")
            setBtn2Class("buttonHide")
            settimerActive(false)
        }
    }
    // clearFunction
    const clearFunction=()=>{
        setBtn1Class("buttonActive")
        setBtn2Class("buttonHide")
        setinputValue("")
        setCountDown()
        settimerActive(false)
        setInputClass("inputShow")
        setresultClass("resultHide")
    }
    useEffect(()=>{
        let interval
        if(timerActive){
            interval = setInterval(() => {
                setCountDown((previousCount)=>previousCount-1)
            }, 1000);
            if(countDown===0){
                return ()=>{
                    clearInterval(interval)
                } 
            }
        }
        if(timerActive===false){
            console.log("timer deactive")
        }
        return ()=>{
            clearInterval(interval)
        }
    },[timerActive])
    let minutes = Math.floor(countDown/60 )
    let seconds = countDown % 60
  return (
    <div className='mainStopwathchSection'>
      <div className='inputSection'>
        <input className={inputClass} type='number' placeholder='Minute' min="0" value={inputValue} 
        onChange={(e)=>{setinputValue(e.target.value)}}/>
            <p className={resultClass}>{`${minutes}`}:{`${seconds}`}</p>
      </div>
      <div className='buttons'>
        <button className={btn1Class}  onClick={startFunction}><i class="fa-solid fa-play"></i></button>
        <button className={btn2Class}  onClick={pauseFunction} value="Pause"><i class="fa-solid fa-pause"></i></button>
        <button className={btn3Class}  onClick={clearFunction}><i class="fa-solid fa-rotate-left"></i></button>
      </div>
    </div>
  )
}

export default StopWatch
