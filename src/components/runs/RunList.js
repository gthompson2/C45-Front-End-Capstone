import React, { useContext, useEffect } from "react"
import { RunContext } from "./RunProvider"
import { IntervalContext } from "./RunProvider"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export const RunList = () => {
    const { runs, getRuns } = useContext(RunContext)
    const { intervals, getIntervals } = useContext(IntervalContext)


    useEffect(() => {
        getRuns()
        getIntervals()
    }, [])

    return (
        <div className="runs">
            <h3>Run Log</h3>
            <div className="text-center">
            <ButtonGroup aria-label="Basic example">
                <Button href="/runs/allRuns"variant="primary">All</Button>
                <Button href="/runs/longRuns" variant="primary">Long Runs</Button>
                <Button href="/runs/shortRuns" variant="primary">Short Runs</Button>
                <Button href="/runs/intervals" variant="primary">Intervals</Button>
            </ButtonGroup>
            </div>
        </div>
            
    )
}