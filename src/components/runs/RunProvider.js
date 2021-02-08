import React, { useState, createContext } from "react"

export const RunContext = createContext()
export const IntervalContext = createContext()

let userRuns = []
let userIntervals = []

export const RunProvider = (props) => {
    const [runs, setRuns] = useState([])
    
    
    const getRuns = () => {
        return fetch("http://localhost:8088/runs")
        .then(res=>res.json())
        .then(setRuns)
        
    }

    const currentUserId = parseInt(localStorage.getItem("runHub_user"))
    userRuns = runs.filter((run) => {
        return run.userId === currentUserId
    })

    const addRun = (runObj) => {
        return fetch("http://localhost:8088/runs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(runObj)
        })
        .then(getRuns)
    }
    
    return (
        <RunContext.Provider value={{
            userRuns, getRuns, addRun
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

    const currentUserId = parseInt(localStorage.getItem("runHub_user"))
    userIntervals = intervals.filter((interval) => {
        return interval.userId === currentUserId
    })

    const addInterval = (intervalObj) => {
        return fetch("http://localhost:8088/intervals", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(intervalObj)
        })
        .then(getIntervals)
    }

    return (
        <IntervalContext.Provider value={{
            userIntervals, getIntervals, addInterval
        }}>
            {props.children}
        </IntervalContext.Provider>
    )

}