import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { RunContext } from './RunProvider'


let runTypeString = ""

export const RunCard = ({ run }) => {
    const { deleteRun } = useContext(RunContext)

    if (run.runType === 1) {
        runTypeString = "Long Run"
    } else {
        runTypeString = "Short Run"
    }

    const handleDelete = () => {
        deleteRun(run.id)
    }

    return (
    <div className="runCard">
        <ListGroup horizontal>
            <ListGroup.Item>Date: {(new Date(run.date)).toLocaleDateString('en-US')}</ListGroup.Item>
            <ListGroup.Item>Run Type: {runTypeString}</ListGroup.Item>
            <ListGroup.Item>Distance: {run.distance} mi</ListGroup.Item>
            <ListGroup.Item>Pace: {run.pace} min/mi</ListGroup.Item>
            <Button onClick={handleDelete} variant="danger">Delete Run</Button>
        </ListGroup>
    </div>
    )
}