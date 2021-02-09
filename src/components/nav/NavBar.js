import React from "react"
import { useHistory } from "react-router-dom"
import "./NavBar.css"
import { Breadcrumb } from "react-bootstrap"


export const NavBar = (props) => {
    const history = useHistory()

    const logOut = () => {
        localStorage.removeItem('runHub_user')
        history.go(0)
    }

    return (
       <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/runs">Runs</Breadcrumb.Item>
        <Breadcrumb.Item href="/statistics">Statistics</Breadcrumb.Item>
        <Breadcrumb.Item onClick={logOut} variant="danger">Log Out</Breadcrumb.Item>
       </Breadcrumb>
    )
}