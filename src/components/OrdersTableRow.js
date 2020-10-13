import React, {Component} from 'react';

class OrdersTableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.pid}
                </td>

                <td>
                    {this.props.obj.material}
                </td>

                <td>
                    {this.props.obj.quantity}
                </td>

            </tr>
        );
    }
}

export default OrdersTableRow;