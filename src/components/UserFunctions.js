import axios from 'axios';

export const purchaseRequisitions = user => {
    return axios
        .put('', {
            status : user.status
        })
        .then(res => {
            console.log("Accepted");
            window.alert("Accepted");
        })
        .catch(err => {
            console.log(err);
        })
}