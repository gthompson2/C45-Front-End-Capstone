import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { RunProvider } from "./runs/RunProvider"
import { IntervalProvider } from "./runs/RunProvider"
import { RunList } from "./runs/RunList"
import { AllRuns } from "./runs/AllRuns"
import { LongRuns } from "./runs/LongRuns"
import { ShortRuns } from "./runs/ShortRuns"
import { Intervals } from "./runs/Intervals"
import { LongRunForm } from "./forms/LongRunForm"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path ="/">
                <Home />
            </Route>

        <RunProvider>
            <IntervalProvider>
                <Route path="/runs">
                    <RunList />
                </Route>
                <Route path="/runs/allRuns">
                    <AllRuns />
                </Route>
                <Route path="/runs/longRuns/">
                    <LongRuns />
                </Route>
                <Route path="/runs/shortRuns/">
                    <ShortRuns />
                </Route>
                <Route path="/runs/intervals/">
                    <Intervals />
                </Route>
                <Route path="/forms/LongRunForm">
                    <LongRunForm />
                </Route>
            </IntervalProvider>
        </RunProvider>
        </>
    )
}

