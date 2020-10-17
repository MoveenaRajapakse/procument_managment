import React, {Component} from 'react';
import axios from 'axios';

class OderDetailsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders : []
        };
    }

    componentDidMount() {
        axios.get('/getApprovedOrders')
            .then(response => {
                this.setState({orders: response.data});
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
                <h5>
                    <table className="table table-sm table-striped" style={{marginTop: 15}}>
                        <thead class="thead-dark">
                        <tr>
                            <th>Requisition ID</th>
                            <th>Material</th>
                            <th>Quantity</th>
                            <th>Option</th>
                        </tr>
                        </thead>
                        {
                            this.state.orders.map(pr =>{
                                return(
                                    <tbody>
                                    <tr>
                                        <td>{pr.pid}</td>
                                        <td>{pr.material}</td>
                                        <td>{pr.quantity}</td>
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

export default OderDetailsTable;