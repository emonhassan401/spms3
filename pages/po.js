import styles from '../styles/co.module.css'
import BarChart from '../components/charts/PieChartPo';
import PieChart from '../components/charts/BarChartPo';



const Po = ({ studentData }) => {
    return (
        <>
            <div className={styles.container}>
                <PieChart />
                <BarChart />

            </div>
        </>
    )
}

export default Po
