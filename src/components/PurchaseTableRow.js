import React, {Component} from 'react';

class PurchaseTableRow extends Component {
    render() {
        return (
            <tr>
                {/*<td>
                    {this.props.obj.pid}
                </td>*/}

                <td>
                    {this.props.obj.supplier}
                </td>

                <td>
                    {this.props.obj.orderDate}
                </td>

                <td>
                    {this.props.obj.address}
                </td>

                <td>
                    {this.props.obj.total}
                </td>

            </tr>
        );
    }
}

export default PurchaseTableRow;