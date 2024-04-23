import React from 'react'
import { Pie } from 'react-chartjs-2'
import styles from '../../styles/co.module.css'

export const PieChart = () => {
    const data = {
        labels: [
            'CO1',
            'CO2',
            'CO3',
            'CO4',
            'Average Semester total',
        ],
        datasets: [{
            label: 'Student name',
            data: [65, 59, 80, 81, 56],
            fill: true,
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
            ],
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
        }]
    }

    return (
        <div>
            <div className={styles.bgWhite}>
                <Pie
                    data={data}
                    height={600}
                    width={800}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            beginAtZero: true,
                            r: {
                                angleLines: {
                                    display: false
                                },
                                suggestedMin: 0,
                                suggestedMax: 100
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default PieChart
