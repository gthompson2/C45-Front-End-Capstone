import React, { useContext, useEffect, useState } from "react"
import { RunContext } from "../runs/RunProvider"
import { useHistory } from "react-router-dom"
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

export const LongRunForm = () => {
    const { addRun } = useContext(RunContext)
    const user = localStorage.getItem("runHub_user")

    /*
    With React, we do not target the DOM with `document.querySelector()`. 
    Instead, our return (render) reacts to state or props.

    Define the initial state of the form inputs with useState()
    */
    const [longRun, setRuns] = useState({
        userId: parseInt(user),
        date: "",
        runType: 1,
        distance: "",
        pace: "",
    });

    const history = useHistory()


    const handleControlledInputChange = (event) => {
        console.log("the controlled input was handled")
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newLongRun = {...longRun}
        let selectedVal = event.target.value
        // forms always provide values as strings, so we must convert input to numbers.
        // if (event.target.id.includes("runType") || event.target.id.includes("distance") || event.target.id.includes("pace")) {
        //     selectedVal = parseInt(selectedVal)
        // }
        // selectedVal = parseInt(selectedVal)
        console.log("event.target.className", event.target.className)
        console.log("event.target.id", event.target.id)
        newLongRun[event.target.id] = selectedVal
        // update state
        setRuns(newLongRun)
        console.log(newLongRun)
        
    }

    const handleClickSaveLongRun = (event) => {
        event.preventDefault()

        const date = longRun.date
        const distance = longRun.distance
        const pace = longRun.pace

        if (distance === undefined || pace === undefined) {
            console.log(longRun)
            window.alert("Please fill out all form components.")
        } else if (parseFloat(distance) || parseFloat(pace)) {
            if (parseFloat(distance)) {
                longRun.distance = parseFloat(distance)
            }
            if (parseFloat(pace)) {
                longRun.pace = parseFloat(pace)
            }
            addRun(longRun)
            .then(() => history.push("/runs/longRuns"))
        } else {
            addRun(longRun)
            .then(() => history.push("/runs/longRuns"))

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
                        value={longRun.date}
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
                        value={longRun.distance}
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
                        value={longRun.pace}
                        onChange={handleControlledInputChange}
                        id="pace"
                    />
                </InputGroup>
            </label>
            <Button onClick={handleClickSaveLongRun} variant="success">Save Run</Button>
            <Button href="/runs/longRuns" variant="danger">Cancel</Button>
        </div>
    )

}