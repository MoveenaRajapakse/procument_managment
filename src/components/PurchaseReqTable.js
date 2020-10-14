import React, {Component} from 'react';
import axios from 'axios';
import PurchaseTableRow from "./PurchaseTableRow";

class PurchaseReqTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            purchaseRequest : []
        };
    }

    componentDidMount() {
        axios.get('/getAllRequisition')
            .then(response => {
                this.setState({purchaseRequest: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.purchaseRequest.map(function (object,i) {
            return <PurchaseTableRow obj = {object} key ={i} />;
        })
    }

    render() {
        return (
            <div>
                {/*<h4 align="center">Purchase Requisition List</h4>*/}
                <h5>
                    <table className="table table-striped" style={{marginTop: 15}}>
                        <thead class="thead-dark">
                        <tr>
                            {/*<th>Order ID</th>*/}
                            <th>Supplier</th>
                            <th>Delivery Date</th>
                            <th>Delivery Address</th>
                            <th>Total</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.tabRow()}
                        </tbody>
                    </table>
                </h5>
            </div>
        );
    }
}

export default PurchaseReqTable;