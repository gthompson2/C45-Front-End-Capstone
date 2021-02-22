import React, { useContext, useEffect}from "react"
import { RunContext } from "./RunProvider"
import { RunCard } from "./RunCard"
import "./RunLogs.css"
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

    // the user's runs are sorted in chronological order based on their date values
    longRuns.sort((a, b) => b.date - a.date)


    return (
        <div className="longRuns">
            <div className="runCardBox">
                {
                    longRuns.map(run => {
                        return <RunCard key={run.id} run={run} />
                    })
                }
            </div>
            <div>
                <Button href="/forms/LongRunForm" variant="success">Log Long Run</Button>
            </div>
        </div>
    )
}