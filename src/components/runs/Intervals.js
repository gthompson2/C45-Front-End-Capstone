import React, {useEffect, useContext} from "react"
import { IntervalContext } from "./RunProvider"
import { IntervalCard } from "./IntervalCard"
import Button from 'react-bootstrap/Button'

export const Intervals = () => {
    const {userIntervals, getIntervals} = useContext(IntervalContext)

    useEffect(() => {
        getIntervals()
    }, [])

    return (
        <div className="intervals">
            {
                userIntervals.map(interval => {
                    return <IntervalCard key={interval.id} interval={interval} />
                })
                //Button to log a run goes here
            }
                <>
                    <Button variant="success">Log Interval Run</Button>
                </>
        </div>
    )
}