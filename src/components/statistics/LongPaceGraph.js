import React, { useEffect, useContext, useState } from "react"
import { RunContext } from "../runs/RunProvider"
import { Line } from 'react-chartjs-2'

export const LongPaceGraph = () => {
    const {userRuns, getRuns} = useContext(RunContext)
    const [chartData, setChartData] = useState({})

    let longRuns = []
    let longRunDate = []
    let longRunPace = []

    const longPaceChart = () => {
        console.log(userRuns)
        longRuns = userRuns.filter((run)=>{
            return run.runType === 1
        })

        longRuns.sort((a, b) => a.date - b.date)

    
        for ( const run of longRuns) {
            longRunDate.push((new Date(run.date)).toLocaleDateString('en-US'))
            longRunPace.push(run.pace)
        }
    
        console.log(longRunDate)
        console.log(longRunPace)

        setChartData({
            labels: longRunDate,
            datasets:[
                {
                    label: "Run Pace",
                    data: longRunPace,
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
        getRuns()
    }, [])

    useEffect(() => {
        longPaceChart()
    }, [userRuns])

    return (
        <div>
            <h1>Pace Over Time - Long Runs</h1>
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