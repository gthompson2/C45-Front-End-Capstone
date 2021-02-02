import React from "react"
import "./NavBar.css"
import { Breadcrumb } from "react-bootstrap"

export const NavBar = (props) => {
    return (
       <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/runs">Runs</Breadcrumb.Item>
        <Breadcrumb.Item href="/statistics">Statistics</Breadcrumb.Item>
       </Breadcrumb>
    )
}