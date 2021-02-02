import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { Breadcrumb } from "react-bootstrap"

export const NavBar = (props) => {
    return (
       <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item>Runs</Breadcrumb.Item>
        <Breadcrumb.Item>Statistics</Breadcrumb.Item>
       </Breadcrumb>
    )
}