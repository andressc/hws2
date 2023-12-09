import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload === 'up') return state.slice().sort((a: UserType, b: UserType) => a.name < b.name ? -1 : 1)

            return state.slice().sort((a: UserType, b: UserType) =>  a.name > b.name ? -1 : 1)
        }
        case 'check': {
            return state.filter((v: UserType) => v.age >= action.payload).sort((a: UserType, b: UserType) =>  a.age < b.age ? -1 : 1)
        }
        default:
            return state
    }
}