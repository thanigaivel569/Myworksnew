/*
 * The users reducer will always return an array of users no matter what
 * You need to return something, so if there are no users then just return an empty array
 * */

const userData = [];
export default function (state = userData, action) {
    switch (action.type) {
        case 'MODIFY':
            return [...state, action.payload];
        case "ADD":
            return [...state, action.payload];
        case 'DELETE':
        return state.filter(eachstatevalue => { return eachstatevalue.id != action.payload.id });
            console.log(del);
        case 'LOAD':
            return action.payload;

        default:
            return state;
    }
}