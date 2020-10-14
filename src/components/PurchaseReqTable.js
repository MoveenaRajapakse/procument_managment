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

    getRowData = (supplier,orderDate,address,total,material,quantity,pid) =>{
        this.props.onViewClick(supplier,orderDate,address,total,material,quantity,pid);
    }





    render() {
        return (
            <div>
                {/*<h4 align="center">Purchase Requisition List</h4>*/}
                <h5>
                    <table className="table table-striped" style={{marginTop: 15}} >
                        <thead class="thead-dark">
                        <tr>
                            {/*<th>Order ID</th>*/}
                            <th>Supplier</th>
                            <th>Delivery Date</th>
                            <th>Delivery Address</th>
                            <th>Total</th>

                        </tr>
                        </thead>
                        {
                            this.state.purchaseRequest.map(pr =>{
                                return(
                                    <tbody>
                                        <tr>
                                            <td>{pr.supplier}</td>
                                            <td>{pr.orderDate}</td>
                                            <td>{pr.address}</td>
                                            <td>{pr.total}</td>
                                            <td><button type="button" className="btn btn-outline-info btn-sm" onClick={()=>this.getRowData(pr.supplier,pr.orderDate,pr.address,pr.total,pr.material,pr.quantity,pr.pid)}>VIEW</button></td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </h5>
            </div>
        );
    }
}

export default PurchaseReqTable;