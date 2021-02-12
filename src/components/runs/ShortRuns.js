import React, { useContext, useEffect}from "react"
import { RunContext } from "./RunProvider"
import { RunCard } from "./RunCard"
import Button from 'react-bootstrap/Button'




export const ShortRuns = () => {
    
    const {userRuns, getRuns} = useContext(RunContext)
    let shortRuns = []

    useEffect(() => {
        getRuns()
    }, [])

    shortRuns = userRuns.filter((run)=>{
        return run.runType === 2
    })

    shortRuns.sort((a, b) => b.date - a.date)

    return (
        <div className="shortRuns">
            {
                shortRuns.map(run => {
                    return <RunCard key={run.id} run={run} />
                })
            }
            <>
                <Button href="/forms/ShortRunForm" variant="success">Log Short Run</Button>
            </>
        </div>
    )
}