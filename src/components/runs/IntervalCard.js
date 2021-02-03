import ListGroup from 'react-bootstrap/ListGroup'


export const IntervalCard = ({ interval }) => {

    return (
    <ListGroup horizontal>
        <ListGroup.Item>Date: {interval.date}</ListGroup.Item>
        <ListGroup.Item>Run Type: Interval</ListGroup.Item>
        <ListGroup.Item>Split Distance: {interval.intervalDist} mi</ListGroup.Item>
        <ListGroup.Item>Split Pace: {interval.intervalPace} min/mi</ListGroup.Item>
    </ListGroup>
    )
}