import './App.css';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getHorsesData} from "./redux/betReducer";
import Horses from "./components/Horses";
import Preloader from "./common/Preloader";
import Error from "./common/Error";

function App() {
    const dispatch = useDispatch()
    const isConnected = useSelector(state => state.bet.isConnected)
    const endFetchedData = useSelector(state => state.bet.endFetchedData)

    useEffect(() => {
        dispatch(getHorsesData())
    }, [dispatch])
    if (!endFetchedData) {
        return <Preloader/>
    }
    if (!isConnected) {
        return <Error/>
    }
    return (
        <div className="App">
            <Horses/>
        </div>
    );
}

export default App;
