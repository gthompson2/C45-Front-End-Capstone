import React, { useEffect, useContext, useState } from "react"
import { RunContext } from "../runs/RunProvider"
import { Line } from 'react-chartjs-2'

export const ShortDistanceGraph = () => {
    const {userRuns, getRuns} = useContext(RunContext)
    const [chartData, setChartData] = useState({})

    let shortRuns = []
    let shortRunDate = []
    let shortRunDistance = []

    const shortDistanceChart = () => {
        console.log(userRuns)
        shortRuns = userRuns.filter((run)=>{
            return run.runType === 2
        })

        shortRuns.sort((a, b) => a.date - b.date)

    
        for ( const run of shortRuns) {
            shortRunDate.push((new Date(run.date)).toLocaleDateString('en-US'))
            shortRunDistance.push(run.distance)
        }
    
        console.log(shortRunDate)
        console.log(shortRunDistance)

        setChartData({
            labels: shortRunDate,
            datasets:[
                {
                    label: "Run Distance",
                    data: shortRunDistance,
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
        shortDistanceChart()
    }, [userRuns])

    return (
        <div>
            <h1>Distance Over Time - Short Runs</h1>
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
                                    beginAtZero: false
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