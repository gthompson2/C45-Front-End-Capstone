import React, { useContext, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { RunContext } from "./RunProvider"
import { RunCard } from "./RunCard"

export const AllRuns = () => {
    const { userRuns, getRuns } = useContext(RunContext)
    console.log("AllRuns", userRuns)
    useEffect(() => {
        getRuns()
    }, [])

    return (
        <div className="allRuns">
            {
                userRuns.map(run => {
                    return <RunCard key={run.id} run={run} />
                })
            }
        </div>
    )

}