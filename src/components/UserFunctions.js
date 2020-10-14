import axios from 'axios';

export const purchaseRequisitions = user => {
    return axios
        .put('/updateRequisition', {
            pid: user.pid,
            status : user.status
        })
        .then(res => {
            console.log("Status Updated");
            window.alert("Status Updated");
        })
        .catch(err => {
            console.log(err);
        })
}

export const updateInventory = user => {
    return axios
        .put('/updateInventory',{
            pid: user.pid,
            materiel: user.materiel,
            quantity: user.quantity
        })
        .then(res => {
            console.log("Updated");
            window.alert("Updated");
        })
        .catch(err => {
            console.log(err);
        })
}