import React, { useContext } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { IntervalContext } from './RunProvider'

export const IntervalCard = ({ interval }) => {
    const { deleteInterval } = useContext(IntervalContext)

    const handleDelete = () => {
        deleteInterval(interval.id)
    }

    return (
    <ListGroup horizontal>
        <ListGroup.Item>Date: {(new Date(interval.date)).toLocaleDateString('en-US')}</ListGroup.Item>
        <ListGroup.Item>Run Type: Interval</ListGroup.Item>
        <ListGroup.Item>Split Distance: {interval.intervalDist} mi</ListGroup.Item>
        <ListGroup.Item>Split Pace: {interval.intervalPace} min/mi</ListGroup.Item>
        <Button onClick={handleDelete} variant="danger">Delete Run</Button>
    </ListGroup>
    )
}