import React, {useEffect, useContext} from "react"
import { IntervalContext } from "./RunProvider"
import { IntervalCard } from "./IntervalCard"

export const Intervals = () => {
    const {intervals, getIntervals} = useContext(IntervalContext)

    useEffect(() => {
        getIntervals()
    }, [])

    return (
        <div className="intervals">
            {
                intervals.map(interval => {
                    return <IntervalCard key={interval.id} interval={interval} />
                })
            }
        </div>
    )
}