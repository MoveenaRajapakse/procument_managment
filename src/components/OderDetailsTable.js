import React, {Component} from 'react';
import axios from 'axios';
import OrdersTableRow from "./OrdersTableRow";

class OderDetailsTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            orders : []
        };
    }

    componentDidMount() {
        axios.get('/getAllRequisition')
            .then(response => {
                this.setState({orders: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    tabRow() {
        return this.state.orders.map(function (object,i) {
            return <OrdersTableRow obj = {object} key ={i} />;
        })
    }

    render() {
        return (
            <div>
                <h5>
                    <table className="table table-striped" style={{marginTop: 20}}>
                        <thead class="thead-dark">
                        <tr>
                            <th>Requisition ID</th>
                            <th>Material</th>
                            <th>Quantity</th>

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

export default OderDetailsTable;