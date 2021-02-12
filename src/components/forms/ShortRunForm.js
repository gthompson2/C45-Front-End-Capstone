import React, { useContext, useState } from "react"
import { RunContext } from "../runs/RunProvider"
import { useHistory } from "react-router-dom"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export const ShortRunForm = () => {
    const { addRun } = useContext(RunContext)
    const user = localStorage.getItem("runHub_user")

    /*
    With React, we do not target the DOM with `document.querySelector()`. 
    Instead, our return (render) reacts to state or props.

    Define the initial state of the form inputs with useState()
    */
    const [shortRun, setRuns] = useState({
        userId: parseInt(user),
        date: "",
        runType: 2,
        distance: "",
        pace: "",
    });

    const history = useHistory()


    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newShortRun = {...shortRun}
        let selectedVal = event.target.value
        newShortRun[event.target.id] = selectedVal
        // update state
        setRuns(newShortRun)
        
    }

    const handleClickSaveShortRun = (event) => {
        event.preventDefault()

        const date = shortRun.date
        const distance = shortRun.distance
        const pace = shortRun.pace

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
                shortRun.date = convertedDate
                shortRun.distance = parseFloat(distance)
                shortRun.pace = parseFloat(pace)
                addRun(shortRun)
                .then(() => history.push("/runs/shortRuns"))
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
                        value={shortRun.date}
                        onChange={handleControlledInputChange}
                        id="date"
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Distance:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="mi"
                        aria-label="mi"
                        aria-describedby="basic-addon1"
                        value={shortRun.distance}
                        onChange={handleControlledInputChange}
                        id="distance"
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">Pace:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="min/mi"
                        aria-label="min/mi"
                        aria-describedby="basic-addon1"
                        value={shortRun.pace}
                        onChange={handleControlledInputChange}
                        id="pace"
                    />
                </InputGroup>
            </label>
            <Button onClick={handleClickSaveShortRun} variant="success">Save Run</Button>
            <Button href="/runs/shortRuns" variant="danger">Cancel</Button>
        </div>
    )

}