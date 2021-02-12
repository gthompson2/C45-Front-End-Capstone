import React, { useContext, useState } from "react"
import { IntervalContext } from "../runs/RunProvider"
import { useHistory } from "react-router-dom"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export const IntervalRunForm = () => {
    const { addInterval } = useContext(IntervalContext)
    const user = localStorage.getItem("runHub_user")

    /*
    With React, we do not target the DOM with `document.querySelector()`. 
    Instead, our return (render) reacts to state or props.

    Define the initial state of the form inputs with useState()
    */
    const [interval, setIntervals] = useState({
        userId: parseInt(user),
        date: "",
        intervalDist: "",
        intervalPace: "",
    });

    const history = useHistory()


    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newInterval = {...interval}
        let selectedVal = event.target.value
        newInterval[event.target.id] = selectedVal
        // update state
        setIntervals(newInterval)
        
    }

    const handleClickSaveInterval = (event) => {
        event.preventDefault()

        const date = interval.date
        const distance = interval.intervalDist
        const pace = interval.intervalPace

        // Verify that all form sections have been filled
        if (date === "" || distance === "" || pace === "") {
            window.alert("Please fill out all form components.")
            // Verify that the distance variable can be converted to a number
        } else if (!parseFloat(distance)) {
            window.alert("You must enter a number for the distance value.")
            // Verify that the pace variable can be converted to a number
        } else if (!parseFloat(pace)) {
            window.alert("You must enter a number for the pace value")
            // Verify that the date variable is in the proper format, and that
            // each section of the date is valid.
        } else if (!(date.includes("/"))) {
            window.alert("Please enter a valid date in mm/dd/yyy format.")
        } else if (date.includes("/")) {
            const [month, day, year] = date.split("/")
            if (!parseInt(month) || !parseInt(day) || !parseInt(year)) {
                window.alert("Please enter a valid date in mm/dd/yyy format.")
            } else if (parseInt(month) > 12 || parseInt(month) < 1 || parseInt(day) > 31 || parseInt(day) < 1) {
                window.alert("Please enter a valid date in mm/dd/yyy format.")
            } else {
                // If all values are entered correctly, reformat them and push to the database
                const convertedDate = Date.parse(new Date(date))
                interval.date = convertedDate
                interval.intervalDist = parseFloat(distance)
                interval.intervalPace = parseFloat(pace)
                addInterval(interval)
                .then(() => history.push("/runs/intervals"))
            }
        } 
    }

    return (
        <div>
            <label>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Date:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="mm/dd/yyyy"
                        aria-label="mm/dd/yyyy"
                        aria-describedby="basic-addon1"
                        value={interval.date}
                        onChange={handleControlledInputChange}
                        id="date"
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Split Distance:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="mi"
                        aria-label="mi"
                        aria-describedby="basic-addon1"
                        value={interval.intervalDist}
                        onChange={handleControlledInputChange}
                        id="intervalDist"
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Split Pace:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="min/mi"
                        aria-label="min/mi"
                        aria-describedby="basic-addon1"
                        value={interval.intervalPace}
                        onChange={handleControlledInputChange}
                        id="intervalPace"
                    />
                </InputGroup>
            </label>
            <Button onClick={handleClickSaveInterval} variant="success">Save Run</Button>
            <Button href="/runs/intervals" variant="danger">Cancel</Button>
        </div>
    )
}