import ListGroup from 'react-bootstrap/ListGroup'

//Add listgroup item that calculates the type of run using
// If statements based on run.type
// (run) => {if (run.runType ===1 ){return 'Long Run'}}
export const RunCard = ({ run }) => (
    <ListGroup horizontal>
        <ListGroup.Item>Date: {run.date}</ListGroup.Item>
        <ListGroup.Item>Distance: {run.distance} mi</ListGroup.Item>
        <ListGroup.Item>Pace: {run.pace} min/mi</ListGroup.Item>
    </ListGroup>
)