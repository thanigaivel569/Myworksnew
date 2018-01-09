export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
// export const addUser=(user)=>{
//     console.log(user);
//     return{
//         type:'ADD',
//         payload:user
//     }
// };

export const addUser = (user) => {
    return fetch('  http://localhost:3003/userData',
        {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(
        data =>
            ({
                type: "ADD",
                payload: data.json()
            }),

        error => console.log(error)
        );

};


export const modifyUser = (user) => {
    return fetch('  http://localhost:3003/userData/' + user.id,
        {
            method: 'PUT',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(
        data =>
            ({
                type: "MODIFY",
                payload: data.json()
            }),

        error => console.log(error)
        );

};
// export const modifyUser = (user) => {
//     return {
//         type: 'MODIFY',
//         payload: user
//     }
// }
export const showDetails = (value) => {
    return {
        type: 'SHOW_DETAILS',
        payload: { showContent: value }
    }
};


// export const deleteUser = (user) => {
//     return {
//         type: 'DELETE',
//         payload: user
//     }
// }


export const deleteUser = (user) => {
    return fetch('  http://localhost:3003/userData' + '/' + user.id,
        {
            method: 'DELETE',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(
        data =>
            ({
                type: "DELETE",
                payload: user
            }),

        error => console.log(error)
        );

};