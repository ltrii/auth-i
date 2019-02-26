import Axios from "axios";

export const REGISTER_USER = 'REGISTER_USER';
export const USER_REGISTERED = 'USER_REGISTERED';

export const registerUser = () => dispatch => {
    dispatch({ type: REGISTER_USER });
    Axios
        .post(
            'http://localhost:5000/api/register/'
        )
        .then(res => dispatch({ type: USER_REGISTERED, payload: res.data }))
        .catch(err => console.log('error fetching'))
}

// export const savingFriends = (friend) => dispatch => {
//     dispatch({ type: SAVING_FRIENDS });
//     Axios
//         .post(`http://localhost:5000/api/friends/`, friend)
//         .then(res => {
//             dispatch({ type: FRIENDS_SAVED, payload: res.data });
//         })
//         .catch(err => console.log(err));
// }

// export const deletingFriend = (id) => dispatch => {
//     dispatch({ type: DELETING_FRIEND });
//     Axios
//         .delete(`http://localhost:5000/api/friends/${id}`)
//         .then(res => {
//             dispatch({ type: FRIEND_DELETED, payload: res.data }, {params: {id: id}});
//         })
//         .catch(err => console.log(err));
// }

// export const updatingFriend = (newName, newAge, newEmail, newInfo, id) => dispatch => {
//     dispatch({ type: UPDATING_FRIEND });
//     Axios
//         .put(`http://localhost:5000/api/friends/${id}`, {
//             id: id,
//             name: newName,
//             email: newEmail,
//             age: newAge,
//             additional: newInfo
//         })
//         .then(res => {
//             dispatch({ type: FRIEND_UPDATED, payload: res.data })
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }