import React, { useEffect, useContext, useState } from "react"
import { IntervalContext } from "../runs/RunProvider"
import { Line } from 'react-chartjs-2'

export const IntervalPaceGraph = () => {
    const {userIntervals, getIntervals} = useContext(IntervalContext)
    const [chartData, setChartData] = useState({})

    let intervalRuns = userIntervals
    let intervalRunDate = []
    let intervalRunPace = []

    const intervalPaceChart = () => {
        console.log(userIntervals)
        
        intervalRuns.sort((a, b) => a.date - b.date)

    
        for ( const run of intervalRuns) {
            intervalRunDate.push((new Date(run.date)).toLocaleDateString('en-US'))
            intervalRunPace.push(run.intervalPace)
        }
    
        console.log(intervalRunDate)
        console.log(intervalRunPace)

        setChartData({
            labels: intervalRunDate,
            datasets:[
                {
                    label: "Run Pace",
                    data: intervalRunPace,
                    backgroundColor: [
                        'rgba(255, 255, 255, 255)'
                    ],
                    borderColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
        
    }

    useEffect(()=> {
        getIntervals()
    }, [])

    useEffect(() => {
        intervalPaceChart()
    }, [userIntervals])

    return (
        <div>
            <h1>Pace Over Time - Intervals</h1>
            <div style={{height: "1000px", width: "1000px"}}>
                <Line data={chartData} options={{
                    responsive: true,
                    title: {text: "Text title 1", display: false},
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 15,
                                    beginAtZero: false,
                                    reverse: true
                                },
                                gridLines: {
                                    display: false
                                }
                            }
                        ],
                        xAxes: [
                            {
                                gridLines: {
                                    display: true
                                }
                            }
                        ]
                    }
                }}/>
            </div>
        </div>
    )
}