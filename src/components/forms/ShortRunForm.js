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
        console.log("the controlled input was handled")
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newShortRun = {...shortRun}
        let selectedVal = event.target.value
        console.log("event.target.className", event.target.className)
        console.log("event.target.id", event.target.id)
        newShortRun[event.target.id] = selectedVal
        // update state
        setRuns(newShortRun)
        console.log(newShortRun)
        
    }

    const handleClickSaveShortRun = (event) => {
        event.preventDefault()

        const date = shortRun.date
        const distance = shortRun.distance
        const pace = shortRun.pace

        const convertedDate = Date.parse( new Date(date))
        console.log(convertedDate) //if it works, save to DB this way
                                    // and use convertedDate.toLocaleString('en-US')
                                    // to get the string format to display to users
        shortRun.date = convertedDate

        if (distance === undefined || pace === undefined) {
            console.log(shortRun)
            window.alert("Please fill out all form components.")
        } else if (parseFloat(distance) || parseFloat(pace)) {
            if (parseFloat(distance)) {
                shortRun.distance = parseFloat(distance)
            }
            if (parseFloat(pace)) {
                shortRun.pace = parseFloat(pace)
            }
            addRun(shortRun)
            .then(() => history.push("/runs/shortRuns"))
        } else {
            addRun(shortRun)
            .then(() => history.push("/runs/shortRuns"))

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