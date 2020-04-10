import React from 'react'
import { Line } from 'react-chartjs-2'
import { Card } from '../../../../appkit'


export function Hero() {
	return (
		<Card className="Dashboard-hero">
			{/* <h1>Dashboard</h1> */}
      <Line
        height={50}
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 30, 39, 20, 25, 34, 0],
            fill: false,
          }, {
            label: 'My Second dataset',
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)',
            borderColor:'rgb(54, 162, 235)',
            data: [18, 33, 22, 19, 11, 39, 30],
          }]
        }}
        options={{ 
          responsive: true,
          // title: {
          //   display: true,
          //   text: 'Min and Max Settings'
          // },
          scales: {
            yAxes: [{
                ticks: {
                    stepSize: 10
                }
            }]
        }
        }}
      />
		</Card>
	)
}
