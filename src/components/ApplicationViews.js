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
import { ShortRunForm } from "./forms/ShortRunForm"
import { IntervalRunForm } from "./forms/IntervalRunForm"

import { StatisticsList } from "./statistics/StatisticsList"
import { LongPaceGraph } from "./statistics/LongPaceGraph"
import { ShortPaceGraph } from "./statistics/ShortPaceGraph"
import { IntervalPaceGraph } from "./statistics/IntervalPaceGraph"
import { LongDistanceGraph } from "./statistics/LongDistanceGraph"
import { ShortDistanceGraph } from "./statistics/ShortDistanceGraph"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path ="/">
                <Home />
            </Route>

        <RunProvider>
            <IntervalProvider>
{/* ------------RUN LISTS------------ */}
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
{/* ------------RUN FORMS------------ */}
                <Route path="/forms/LongRunForm">
                    <LongRunForm />
                </Route>
                <Route path="/forms/ShortRunForm">
                    <ShortRunForm />
                </Route>
                <Route path="/forms/IntervalRunForm">
                    <IntervalRunForm />
                </Route>
{/* ------------RUN STATISTICS------- */}
                <Route path="/statistics">
                    <StatisticsList />
                </Route>
                <Route path="/statistics/longRuns">
                    <LongPaceGraph />
                    <LongDistanceGraph />
                </Route>
                <Route path="/statistics/shortRuns">
                    <ShortPaceGraph />
                    <ShortDistanceGraph />
                </Route>
                <Route path="/statistics/intervals">
                    <IntervalPaceGraph />
                </Route>
            </IntervalProvider>
        </RunProvider>
        </>
    )
}