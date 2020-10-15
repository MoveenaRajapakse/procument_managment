import React, {Component} from 'react';
import {purchaseRequisitions} from './UserFunctions';
import PurchaseReqTable from "./PurchaseReqTable";

class PurchaseRequisitions extends Component {

    constructor() {
        super();
        this.state = {
            pid : '',
            status : '',
            quantity:0,
            material:'',
            total:0,
            address:'',
            orderDate:''
        }

    }

    getData = (supplier,orderDate,address,total,material,quantity,pid) => {
        this.setState({
            pid : pid,
            status : '',
            quantity:quantity,
            material:material,
            total:total,
            address:address,
            orderDate:orderDate,
            supplier:supplier

        })

        console.log(this.state);
    }

    acceptReq= (id) =>{
        const user = {
            pid:id,
            status: 'accepted'
        }

        purchaseRequisitions(user).then(res => {
            if(res){
                this.props.history.push('/purchase')
            }
        })
    }

    rejectReq= (id) =>{
        const user = {
            pid:id,
            status: 'rejected'
        }

        purchaseRequisitions(user).then(res => {
            if(res){
                this.props.history.push('/purchase')
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                {/*<Header />*/}
                <br/>
                <div className="container">
                    <h4>Updating Purchase Requisition Status</h4>
                    <form>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Order ID</label>
                                    <input type="text"
                                           className="form-control"
                                           name="order_id"
                                           id="order_id"
                                           placeholder="Select the Order ID"
                                           value={this.state.pid}
                                           onChange={this.onChange}/>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Supplier</label>
                                    <input type="text"
                                           className="form-control"
                                           name="supplier"
                                           id="supplier"
                                           placeholder="Select the supplier"
                                           value={this.state.supplier}/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Delivery Date</label>
                                    <input type="text"
                                           className="form-control"
                                           name="date"
                                           id="date"
                                           placeholder="Select the Delivery Date"
                                           value={this.state.orderDate}/>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Delivery Address</label>
                                    <input type="text"
                                           className="form-control"
                                           name="address"
                                           id="address"
                                           value={this.state.address}/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Materiel</label>
                                    <input type="text"
                                           className="form-control"
                                           name="materiel"
                                           id="materiel"
                                           placeholder="Select the Materiel"
                                           value={this.state.material}/>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Total</label>
                                    <input type="text"
                                           className="form-control"
                                           name="total"
                                           id="total"
                                           placeholder="Select the Total"
                                           value={this.state.total}/>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Quantity</label>
                                    <input type="text"
                                           className="form-control"
                                           name="quantity"
                                           id="quantity"
                                           placeholder="Select the Quantity"
                                           value={this.state.quantity}/>
                                </div>
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col-md-3">
                                <button className="btn btn-dark btn-block" onClick={() => this.acceptReq(this.state.pid)}>Accept</button>
                            </div>

                            <div className="col-md-3">
                                <button className="btn btn-dark btn-block" onClick={() => this.rejectReq(this.state.pid)}>Reject</button>
                            </div>
                        </div>

                    </form>
                </div>
                <br/><br/>
                <h4>Available Purchase Requisitions</h4>
                <PurchaseReqTable onViewClick={this.getData}/>
            </React.Fragment>

        );
    }
}

export default PurchaseRequisitions;