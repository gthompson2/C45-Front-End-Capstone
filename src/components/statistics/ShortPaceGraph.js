import React, { useEffect, useContext, useState } from "react"
import { RunContext } from "../runs/RunProvider"
import { Line } from 'react-chartjs-2'

export const ShortPaceGraph = () => {
    const {userRuns, getRuns} = useContext(RunContext)
    const [chartData, setChartData] = useState({})

    let shortRuns = []
    let shortRunDate = []
    let shortRunPace = []

    const shortPaceChart = () => {
        console.log(userRuns)
        shortRuns = userRuns.filter((run)=>{
            return run.runType === 2
        })

        shortRuns.sort((a, b) => a.date - b.date)

    
        for ( const run of shortRuns) {
            shortRunDate.push((new Date(run.date)).toLocaleDateString('en-US'))
            shortRunPace.push(run.pace)
        }
    
        console.log(shortRunDate)
        console.log(shortRunPace)

        setChartData({
            labels: shortRunDate,
            datasets:[
                {
                    label: "Run Pace",
                    data: shortRunPace,
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
        shortPaceChart()
    }, [userRuns])

    return (
        <div>
            <h1>Pace Over Time - Short Runs</h1>
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