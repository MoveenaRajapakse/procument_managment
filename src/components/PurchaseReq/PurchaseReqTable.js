import React, {Component} from 'react';
import axios from 'axios';

class PurchaseReqTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            purchaseRequest : []
        };
    }

    componentDidMount() {
        axios.get('/getPendingOrders')
            .then(response => {
                this.setState({purchaseRequest: response.data});
            })
            .catch(function (error) {
                console.log(error);
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
                    <table className="table table-sm table-striped" style={{marginTop: 15}} >
                        <thead className="thead-dark">
                        <tr>
                            {/*<th>Order ID</th>*/}
                            <th>Supplier</th>
                            <th>Delivery Date</th>
                            <th>Delivery Address</th>
                            <th>Total</th>
                            <th>action</th>

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