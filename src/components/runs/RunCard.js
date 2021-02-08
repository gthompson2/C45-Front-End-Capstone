import ListGroup from 'react-bootstrap/ListGroup'

let runTypeString = ""

export const RunCard = ({ run }) => {
    console.log("run.date:", run.date)
    if (run.runType === 1) {
        runTypeString = "Long Run"
    } else {
        runTypeString = "Short Run"
    }
    return (
    <ListGroup horizontal>
        <ListGroup.Item>Date: {(new Date(run.date)).toLocaleDateString('en-US')}</ListGroup.Item>
        <ListGroup.Item>Run Type: {runTypeString}</ListGroup.Item>
        <ListGroup.Item>Distance: {run.distance} mi</ListGroup.Item>
        <ListGroup.Item>Pace: {run.pace} min/mi</ListGroup.Item>
    </ListGroup>
    )
}