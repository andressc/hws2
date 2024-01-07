export type LoadingType = {
    isLoading: boolean,
}

const initState: LoadingType = {
    isLoading: false,
}

export const loadingReducer = (state: LoadingType = initState, action: any): LoadingType => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING':
            return {...state, isLoading: action.isLoading}

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
})
