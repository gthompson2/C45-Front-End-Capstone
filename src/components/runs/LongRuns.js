import React, { useContext, useEffect}from "react"
import { RunContext } from "./RunProvider"
import { RunCard } from "./RunCard"




export const LongRuns = () => {
    
    const {runs, getRuns} = useContext(RunContext)
    let longRuns = []

    useEffect(() => {
        getRuns()
    }, [])

    longRuns = runs.filter((run)=>{
        
        return run.runType === 1
    })


    return (
        <div className="longRuns">
            {
                longRuns.map(run => {
                    return <RunCard key={run.id} run={run} />
                })
            }
        </div>
    )
}