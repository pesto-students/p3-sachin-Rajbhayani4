const reducer = (state = false, action) => {
    if (action.type === "room") {
        return state = action.payload;
    }
    else {
        return state;
    }
}
export default reducer