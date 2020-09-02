import * as actionType from './action';

const saveResult = res => {
    return {
        type: actionType.STORE_RESULT,
        result: res
    }
}

export const store_result = (result) => {
    return (dispatch) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
}

export const delete_result = (id) => {
    return {
        type: actionType.DELETE_RESULT,
        resultElId: id
    }
}