export function allReducers(state = { num: 0 }, action) {
    console.log(action, action.value + 1)
    switch (action.type) {
        case "increment":
            return { ...state, num: action.value + 1 }
        case "decrement":
            return { ...state, num: action.value - 1 }
        case "clear":
            return { num: 0 }
        default:
            return { num: 0 };
    }
}