import React, { useContext, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { RunContext, IntervalContext } from "./RunProvider"
import { RunCard } from "./RunCard"

export const AllRuns = () => {
    const { userRuns, getRuns } = useContext(RunContext)
    const { userIntervals, getIntervals}  = useContext(IntervalContext)
    console.log("AllRuns", userRuns, userIntervals)
    useEffect(() => {
        getRuns()
    }, [])

    return (
        <div className="allRuns">
            {
                userRuns.map(run => {
                    return <RunCard key={run.id} run={run} />
                })
            }
        </div>
    )

}