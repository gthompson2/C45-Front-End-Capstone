import React, { useState, createContext } from "react"

export const RunContext = createContext()
export const IntervalContext = createContext()


export const RunProvider = (props) => {
    const [runs, setRuns] = useState([])
    
    const getRuns = () => {
        return fetch("http://localhost:8088/runs")
        .then(res=>res.json())
        .then(setRuns)
        
    }

    
    return (
        <RunContext.Provider value={{
            runs, getRuns
        }}>
            {props.children}
        </RunContext.Provider>
    )
}

export const IntervalProvider = (props) => {
    const [intervals, setIntervals] = useState([])

    const getIntervals = () => {
        return fetch("http://localhost:8088/intervals")
        .then(res=>res.json())
        .then(setIntervals)
    }

    return (
        <IntervalContext.Provider value={{
            intervals, getIntervals
        }}>
            {props.children}
        </IntervalContext.Provider>
    )

}