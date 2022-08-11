import betReducer, {
    SET_CONNECTION_INFO,
    SET_FINISHED_HORSE,
    SET_HORSES_DATA,
    SET_SOCKET, setConnectionInfo, setFinishedHorse, setHorsesData,
    setSocket
} from "./betReducer";

describe('betReducer test', () => {
    describe('reducer tests', () => {
        const initialState = {
            isConnected: false,
            endFetchedData: false,
            horses: [],
            finishedHorses: [],
            socket: null,
        }
        test('SET_HORSES_DATA', () => {
            const action = {
                type: SET_HORSES_DATA, payload: [{}, {}, {}, {}, {}, {}]
            }
            expect(betReducer(initialState, action)).toEqual({
                ...initialState, horses: action.payload
            })
        })
        test('SET_CONNECTION_INFO', () => {
            const action = {
                type: SET_CONNECTION_INFO, payload: true
            }
            expect(betReducer(initialState, action)).toEqual({
                ...initialState, isConnected: action.payload, endFetchedData: true
            })
        })
        test('SET_SOCKET', () => {
            const action = {
                type: SET_SOCKET, payload: {}
            }
            expect(betReducer(initialState, action)).toEqual({
                ...initialState, socket: action.payload
            })
        })
        test('SET_FINISHED_HORSE', () => {
            const action = {
                type: SET_FINISHED_HORSE, payload: ''
            }
            expect(betReducer(initialState, action)).toEqual({
                ...initialState, finishedHorses: [...initialState.finishedHorses, action.payload]
            })
        })
    })
    describe('actions tests', () => {
        describe('synchronous tests', () => {
            test('setSocket action', () => {
                expect(setSocket({})).toEqual({
                    type: SET_SOCKET, payload: {}
                })
            })
            test('setHorsesData action', () => {
                expect(setHorsesData([])).toEqual({
                    type: SET_HORSES_DATA, payload: []
                })
            })
            test('setConnectionInfo action', () => {
                expect(setConnectionInfo(true)).toEqual({
                    type: SET_CONNECTION_INFO, payload: true
                })
            })
            test('setFinishedHorse action', () => {
                expect(setFinishedHorse('')).toEqual({
                    type: SET_FINISHED_HORSE, payload: ''
                })
            })
        })
    })
})
