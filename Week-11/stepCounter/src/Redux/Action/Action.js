export const Stapes = (status) => {
    return (dispatch) => {
        dispatch({
            type: "stapes",
            payload: status
        })
    }
}