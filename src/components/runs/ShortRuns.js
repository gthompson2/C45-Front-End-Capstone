import React, { useContext, useEffect}from "react"
import { RunContext } from "./RunProvider"
import { RunCard } from "./RunCard"




export const ShortRuns = () => {
    
    const {runs, getRuns} = useContext(RunContext)
    let shortRuns = []

    useEffect(() => {
        getRuns()
    }, [])

    shortRuns = runs.filter((run)=>{
        return run.runType === 2
    })


    return (
        <div className="shortRuns">
            {
                shortRuns.map(run => {
                    return <RunCard key={run.id} run={run} />
                })
            }
        </div>
    )
}