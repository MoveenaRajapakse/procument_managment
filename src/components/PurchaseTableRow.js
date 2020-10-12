import React, {Component} from 'react';

class PurchaseTableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.OrderId}
                </td>

                <td>
                    {this.props.obj.Supplier}
                </td>

                <td>
                    {this.props.obj.Delivery_Date}
                </td>

                <td>
                    {this.props.obj.Delivery_Address}
                </td>

                <td>
                    {this.props.obj.Total}
                </td>

            </tr>
        );
    }
}

export default PurchaseTableRow;