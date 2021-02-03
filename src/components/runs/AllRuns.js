import React, { useContext, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { RunContext } from "./RunProvider"
import { RunCard } from "./RunCard"

export const AllRuns = () => {
    const { runs, getRuns } = useContext(RunContext)
    console.log("AllRuns", runs)
    useEffect(() => {
        getRuns()
    }, [])

    return (
        <div className="allRuns">
            {
                runs.map(run => {
                    return <RunCard key={run.id} run={run} />
                })
            }
        </div>
    )

}