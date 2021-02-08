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
        console.log("the controlled input was handled")
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newInterval = {...interval}
        let selectedVal = event.target.value
        console.log("event.target.className", event.target.className)
        console.log("event.target.id", event.target.id)
        newInterval[event.target.id] = selectedVal
        // update state
        setIntervals(newInterval)
        console.log(newInterval)
        
    }

    const handleClickSaveInterval = (event) => {
        event.preventDefault()

        const date = interval.date
        const distance = interval.intervalDist
        const pace = interval.intervalPace

        const convertedDate = Date.parse( new Date(date))
        console.log(convertedDate) //if it works, save to DB this way
                                    // and use convertedDate.toLocaleString('en-US')
                                    // to get the string format to display to users
        interval.date = convertedDate

        if (distance === undefined || pace === undefined) {
            console.log(interval)
            window.alert("Please fill out all form components.")
        } else if (parseFloat(distance) || parseFloat(pace)) {
            if (parseFloat(distance)) {
                interval.intervalDist = parseFloat(distance)
            }
            if (parseFloat(pace)) {
                interval.intervalPace = parseFloat(pace)
            }
            addInterval(interval)
            .then(() => history.push("/runs/intervals"))
        } else {
            addInterval(interval)
            .then(() => history.push("/runs/intervals"))

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
                        <InputGroup.Text id="basic-addon1">Distance:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="mi"
                        aria-label="mi"
                        aria-describedby="basic-addon1"
                        value={interval.distance}
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
                        value={interval.pace}
                        onChange={handleControlledInputChange}
                        id="pace"
                    />
                </InputGroup>
            </label>
            <Button onClick={handleClickSaveInterval} variant="success">Save Run</Button>
            <Button href="/runs/intervals" variant="danger">Cancel</Button>
        </div>
    )
}