import styles from '../styles/co.module.css'
import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';


const Co = ({ studentData }) => {
    return (
        <>
            <div className={styles.container}>
                <PieChart />
                <BarChart />

            </div>
        </>
    )
}

export default Co
