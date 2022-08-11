import {useSelector} from "react-redux";
import styles from '../styles/Horses.module.scss'
import TopPlaces from "./TopPlaces";

const Horses = () => {
    const horses = useSelector(state => state.bet.horses)
    const finishedHorses = useSelector(state => state.bet.finishedHorses)

    const imagesHorses = ['horse-1.png', 'horse-2.png', 'horse-3.png', 'horse-4.png', 'horse-5.png', 'horse-6.png']
    let i = 0

    return <div className={styles.mainWrapper}>
        {horses.map(horse => {
            return <div key={horse.name} className={styles.horsesWrapper}>
                <div className={styles.horseName}>{horse.name}</div>
                <div className={styles.distance}> {horse.distance} m</div>
                <img src={imagesHorses[i++]}
                     style={{
                         position: 'absolute',
                         left: `${(document.documentElement.clientWidth * 0.8 / 1000 * horse.distance) - 200}px`,
                         transition: 'all 0.1s linear',
                         zIndex: 1
                     }}
                     alt="horse racing"/>
                <span className={styles.finish}>FINISH</span>
            </div>
        })}
        {finishedHorses.length === 6 ?
            <TopPlaces finishedHorses={finishedHorses}/> : null}
    </div>
}

export default Horses