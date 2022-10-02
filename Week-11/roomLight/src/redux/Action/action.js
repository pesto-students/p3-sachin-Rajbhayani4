export const lightSwitch = (status) => {
    return (dispatch) => {
        dispatch({
            type: "room",
            payload: status
        })
    }
}