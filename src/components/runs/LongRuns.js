import React, { useContext, useEffect}from "react"
import { RunContext } from "./RunProvider"
import { RunCard } from "./RunCard"
import Button from 'react-bootstrap/Button'

export const LongRuns = () => {
    
    const {userRuns, getRuns} = useContext(RunContext)
    let longRuns = []

    useEffect(() => {
        getRuns()
    }, [])

    longRuns = userRuns.filter((run)=>{
        return run.runType === 1
    })


    return (
        <div className="longRuns">
            {
                longRuns.map(run => {
                    return <RunCard key={run.id} run={run} />
                })
            }
            <>
                <Button variant="success">Log Long Run</Button>
            </>
        </div>
    )
}