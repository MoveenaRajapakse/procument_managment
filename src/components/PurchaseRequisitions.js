import React, {Component} from 'react';
import {purchaseRequisitions} from './UserFunctions';
import PurchaseReqTable from "./PurchaseReqTable";

class PurchaseRequisitions extends Component {

    constructor() {
        super();
        this.state = {

        }
    }



    render() {
        return (
            <div>
               <PurchaseReqTable/>
            </div>
        );
    }
}

export default PurchaseRequisitions;