import React from 'react';
import { Radar, Bar } from 'react-chartjs-2';
import styles from '../../styles/co.module.css';

export const BarChart = (props) => {

    let sData;
    let co1;
    let co2;
    let co3;
    let co4;
    let coTotal;
    let studentName;

    let bCo1 = (107 / 110) * 100;
    let bCo2 = (30 / 40) * 100;
    let bCo3 = (48 / 50) * 100;
    let bCo4 = (43 / 50) * 100;
    let bCoTotal = ((bCo1 + bCo2 + bCo3 + bCo4) / 4);

    sData = {
        CO1: 90,
        CO2: 35,
        CO3: 48,
        CO4: 40,
        student_name: 'John Doe',
    };
    co1 = (sData.CO1 / 110) * 100;
    co2 = (sData.CO2 / 40) * 100;
    co3 = (sData.CO3 / 50) * 100;
    co4 = (sData.CO4 / 50) * 100;
    coTotal = ((co1 + co2 + co3 + co4) / 4);
    studentName = sData.student_name;

    return (
        <div>
            <div className={styles.bgWhite}>
                <Bar
                    data={{
                        labels: [
                            'CO1',
                            'CO2',
                            'CO3',
                            'CO4',
                            'Average Semester total',
                        ],
                        datasets: [{
                            label: 'My Dataset',
                            data: [co1, co2, co3, co4, coTotal],
                            fill: true,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 205, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                            ],
                            borderColor: 'rgb(255, 99, 132)',
                            pointBackgroundColor: 'rgb(255, 99, 132)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(255, 99, 132)',
                        },
                        {
                            label: `Top Scorer`,
                            data: [bCo1, bCo2, bCo3, bCo4, bCoTotal],
                            fill: true,
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderColor: 'rgb(54, 162, 235)',
                            pointBackgroundColor: 'rgb(54, 162, 235)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(54, 162, 235)',
                        }
                        ],
                    }}
                    height={600}
                    width={800}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            beginAtZero: true,
                            r: {
                                angleLines: {
                                    display: false,
                                },
                                suggestedMin: 0,
                                suggestedMax: 100,
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};
export default BarChart;