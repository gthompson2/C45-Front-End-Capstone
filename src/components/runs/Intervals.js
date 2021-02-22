import React, {useEffect, useContext} from "react"
import { IntervalContext } from "./RunProvider"
import { IntervalCard } from "./IntervalCard"
import "./RunLogs.css"
import Button from 'react-bootstrap/Button'

export const Intervals = () => {
    const {userIntervals, getIntervals} = useContext(IntervalContext)

    useEffect(() => {
        getIntervals()
    }, [])

    userIntervals.sort((a, b) => b.date - a.date)

    return (
        <div className="intervals">
            <div className="runCardBox">
            {
                userIntervals.map(interval => {
                    return <IntervalCard key={interval.id} interval={interval} />
                })
                //Button to log a run goes here
            }
            </div>
                <>
                    <Button href="/forms/IntervalRunForm" variant="success">Log Interval Run</Button>
                </>
        </div>
    )
}