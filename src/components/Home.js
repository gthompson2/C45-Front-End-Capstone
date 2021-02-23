import React from "react"
import Button from 'react-bootstrap/Button'
import "./Home.css"


export const Home = () => {
    const userName = localStorage.getItem("user_name")
    return (
    <>
        <div className="homeText">
            <h2>{`Welcome to RunHub, ${userName}!`}</h2>
            <h5>Select 'Runs' to view and log data</h5>
            <h5>Select 'Statistics' to view charts</h5>
            <div className="text-center">
                <Button href="/runs/allRuns"variant="primary">Runs</Button>
                <Button href="/statistics" variant="primary">Statistics</Button>
            </div>
        </div>
    </>
    )
}