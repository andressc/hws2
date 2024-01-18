const initState: StateType = {
    themeId: 1,
}

type StateType = {
    themeId: number,
}

export const themeReducer = (state = initState, action: ChangeThemeIdType): StateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID":
            return {...state, themeId: action.id}

        default:
            return state
    }
}

type ChangeThemeIdType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) // fix any
