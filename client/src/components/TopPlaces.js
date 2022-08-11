import styles from "../styles/Horses.module.scss";

const TopPlaces = ({finishedHorses}) => {
    return <div className={styles.finished}>
        <ul className={styles.modal}>
            <li>
                <div>1. {finishedHorses[0]}</div>
                <img src="gold-medal.svg" width={40} height={40} alt="gold medal"/></li>
            <li>
                <div>2. {finishedHorses[1]}</div>
                <img src="silver-medal.svg" width={40} height={40} alt=" silver medal"/></li>
            <li>
                <div>3. {finishedHorses[2]}</div>
                <img src="bronze-medal.svg" width={40} height={40} alt="bronze medal"/></li>
            <li>
                <div>4. {finishedHorses[3]}</div>
            </li>
            <li>
                <div>5. {finishedHorses[4]}</div>
            </li>
            <li>
                <div>6. {finishedHorses[5]}</div>
            </li>
        </ul>
    </div>
}
export default TopPlaces