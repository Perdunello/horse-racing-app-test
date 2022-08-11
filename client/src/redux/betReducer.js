import io from "socket.io-client";

const SET_HORSES_DATA = 'SET_HORSES_DATA'
const SET_CONNECTION_INFO = 'SET_CONNECTION_INFO'
const SET_SOCKET = 'SET_SOCKET'
const SET_FINISHED_HORSE = 'SET_FINISHED_HORSE'

const initialState = {
    isConnected: false,
    endFetchedData: false,
    horses: [],
    finishedHorses: [],
    socket: null,
}

const betReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HORSES_DATA:
            return {...state, horses: action.payload}
        case SET_CONNECTION_INFO:
            return {...state, isConnected: action.payload, endFetchedData: true}
        case SET_SOCKET:
            return {...state, socket: action.payload}
        case SET_FINISHED_HORSE:
            const finishedHorses = state.finishedHorses.some(element => element === action.payload) ? state.finishedHorses : [...state.finishedHorses, action.payload]
            return {
                ...state,
                finishedHorses: finishedHorses
            }
        default:
            return state
    }
}
const setSocket = (payload) => {
    return {type: SET_SOCKET, payload}
}

export const setHorsesData = (payload) => {
    return {type: SET_HORSES_DATA, payload}
}
export const setConnection = (payload) => {
    return {type: SET_CONNECTION_INFO, payload}
}
export const setFinishedHorse = (payload) => {
    return {type: SET_FINISHED_HORSE, payload}
}
export const getHorsesData = () => {
    return (dispatch) => {
        const newSocket = io('http://localhost:3002/')
        dispatch(setSocket(newSocket))
        newSocket.on('connect', () => dispatch(setConnection(newSocket.connected)));
        newSocket.emit('start')
        newSocket.on('ticker', (horses) => {
            horses.forEach(horse => horse.distance === 1000 ? dispatch(setFinishedHorse(horse.name)) : null)
            if (horses.every((element) => element.distance === 1000)) {
                dispatch(socketClose(newSocket))
            }
            dispatch(setHorsesData(horses))
        });
    }
}
export const socketClose = (socket) => {
    return (dispatch) => {
        socket.close()
        dispatch(setSocket(null))
    }
}
export default betReducer