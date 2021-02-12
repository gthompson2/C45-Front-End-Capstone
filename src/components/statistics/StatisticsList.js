import React from "react"
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

export const StatisticsList = () => {

    return (
        <div className="statistics">
            <h3>Run Charts</h3>
            <ButtonGroup aria-label="Basic example">
                <Button href="/statistics/longRuns" variant="primary">Long Runs</Button>
                <Button href="/statistics/shortRuns" variant="primary">Short Runs</Button>
                <Button href="/statistics/intervals" variant="primary">Intervals</Button>
            </ButtonGroup>
        </div>
    )
}