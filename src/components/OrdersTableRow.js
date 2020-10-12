import React, {Component} from 'react';

class OrdersTableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.RequisitionID}
                </td>

                <td>
                    {this.props.obj.meterial}
                </td>

                <td>
                    {this.props.obj.quantity}
                </td>

            </tr>
        );
    }
}

export default OrdersTableRow;