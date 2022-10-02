const reducer = (state = 0, action) => {
    if (action.type === "stapes") {
        return state = action.payload;
    }
    else {
        return state;
    }
}
export default reducer