import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { RunContext } from "./RunProvider"
import { IntervalContext } from "./RunProvider"
// import { RunCard } from "./RunCard"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export const RunList = () => {
    const { runs, getRuns } = useContext(RunContext)
    const { intervals, getIntervals } = useContext(IntervalContext)

    const history = useHistory()

    useEffect(() => {
        console.log("RunList: initial render before data")
        getRuns()
        getIntervals()
    }, [])

    return (
        <div className="runs">
            <h3>Run Log</h3>
            <ButtonGroup aria-label="Basic example">
                <Button href="/runs/allRuns"variant="primary">All</Button>
                <Button href="/runs/longRuns" variant="primary">Long Runs</Button>
                <Button href="/runs/shortRuns" variant="primary">Short Runs</Button>
                <Button href="/runs/intervals" variant="primary">Intervals</Button>
            </ButtonGroup>
        </div>
            
    )
}