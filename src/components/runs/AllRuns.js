import React, { useContext, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { RunContext, IntervalContext } from "./RunProvider"
import { RunCard } from "./RunCard"
import { IntervalCard } from "./IntervalCard"

export const AllRuns = () => {
    const { userRuns, getRuns } = useContext(RunContext)
    const { userIntervals, getIntervals}  = useContext(IntervalContext)
    const allRuns = []

    /** TODO:
     * 
     * 1. create an allRuns array and push both userRuns and userIntervals into it
     * 2. sort the array so that runs are arranged in chronological order --> allRuns.sort((a,b) => a.date - b.date)
     * 3. modify the return statement so that if run.distance exists the object is sent to RunCard, but if
     *      run.intervalDist exists the object is sent to IntervalCard
     */
    useEffect(() => {
        getRuns()
    }, [])

    // add long/short runs and interval runs to the allRuns array
    allRuns.push.apply(allRuns, userRuns) 
    allRuns.push.apply(allRuns, userIntervals)
    allRuns.sort((a, b) => b.date - a.date)

    return (
        <div className="allRuns">
            {
                allRuns.map(run => {
                    if (run.distance){
                        return <RunCard key={run.id} run={run} />
                    } else if (run.intervalDist) {
                        return <IntervalCard key={run.id} interval={run} />
                    }
                })
            }
        </div>
    )

}