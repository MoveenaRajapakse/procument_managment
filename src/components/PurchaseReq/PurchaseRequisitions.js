import React, {Component} from 'react';
import PurchaseReqTable from "./PurchaseReqTable";
import axios from 'axios';
import Success from "../succeess";
import "../header.css";

class PurchaseRequisitions extends Component {

    /**
    *constructor with attributes to define state
     * @param pid
     * Id of the purchase request to approve or reject
     * @param status
     * approve or reject status to update the request
     * @param quantity
     * @param material
     * @param total
     * @param address
     * @param orderDate
    */
    constructor(props) {
        super(props);
        this.state = {
            pid : '',
            status : '',
            quantity:0,
            material:'',
            total:0,
            address:'',
            orderDate:'',
            msg:''
        }
    }

    /**
     * get records from the table to the form
    */
    getData = (supplier,orderDate,address,total,material,quantity,pid) => {
        this.setState({
            pid : pid,
            status : '',
            quantity:quantity,
            material:material,
            total:total,
            address:address,
            orderDate:orderDate,
            supplier:supplier,
            msg:''

        })
        console.log(this.state);
    }

    /**
     * accept order method
     * pass the pid and status values to given Url to update the request
     * @param pid , status
     * @response successfully approved message
     */
    acceptOrder = (e) =>{
        e.preventDefault();

        const status = 'Approved';
        const pid = this.state.pid;

        axios.post('https://cors-anywhere.herokuapp.com/https://procure-api.herokuapp.com/updateRequisition?status='+status+'&pid='+pid,{headers:{'Access-Control-Allow-Origin':'*'}}
        ).then(response => {
            console.log(response);
            this.setState({
                msg:'Order Approved successfully'
            })
        }).catch(error => {
            console.log(error);
        })

    }

    /**
    *reject order method
     * pass the pid and status values to given Url to update the request
     * @param pid , status
     * @response successfully rejected message
     */
    rejectOrder = (e) =>{
        e.preventDefault();

        const status = 'Rejected';
        const pid = this.state.pid;

        axios.post('https://cors-anywhere.herokuapp.com/https://procure-api.herokuapp.com/updateRequisition?status='+status+'&pid='+pid,{headers:{'Access-Control-Allow-Origin':'*'}}
        ).then(response => {
            console.log(response);
            this.setState({
                msg:'Order Rejected Successfully'
            })
        }).catch(error => {
            console.log(error);
        })

    }



    render() {
        return (
            <React.Fragment>
                <br/>
                <div class="container-fluid">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="header">Updating Purchase Requisition Status</h4>
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="game_name">Order ID</label>
                                            <input type="text"
                                                   className="form-control form-control-sm"
                                                   name="order_id"
                                                   id="order_id"
                                                   value={this.state.pid}
                                                   onChange={this.onChange}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="game_name">Supplier</label>
                                            <input type="text"
                                                   className="form-control form-control-sm"
                                                   name="supplier"
                                                   id="supplier"
                                                   value={this.state.supplier}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group ">
                                            <label htmlFor="game_name">Delivery Date</label>
                                            <input type="text"
                                                   className="form-control form-control-sm"
                                                   name="date"
                                                   id="date"
                                                   value={this.state.orderDate}/>
                                        </div>
                                    </div>

                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="game_name">Delivery Address</label>
                                            <input type="text"
                                                   className="form-control form-control-sm"
                                                   name="address"
                                                   id="address"
                                                   value={this.state.address}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="game_name">Materiel</label>
                                        <input type="text"
                                               className="form-control form-control-sm"
                                               name="materiel"
                                               id="materiel"
                                               value={this.state.material}/>
                                    </div>

                                    <div className="form-group col">
                                        <label htmlFor="game_name">Quantity</label>
                                        <input type="text"
                                               className="form-control form-control-sm"
                                               name="quantity"
                                               id="quantity"
                                               value={this.state.quantity}/>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="game_name">Total</label>
                                    <input type="text"
                                           className="form-control form-control-sm"
                                           name="total"
                                           id="total"
                                           value={this.state.total}/>
                                </div>
                                <Success>{this.state.msg}</Success>
                                <br/>
                                <div className="row" >
                                    <div className="col-md-4">
                                        <button className="btn btn-success btn-block " onClick={this.acceptOrder}>Accept</button>
                                    </div>

                                    <div className="col-md-4">
                                        <button className="btn btn-danger btn-block " onClick={this.rejectOrder}>Reject</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/**
                         *display the all available pending purchase requests in a table
                         */}
                        <div className="col-8">
                            <h4 className="header">Available Purchase Requisitions</h4>
                            <PurchaseReqTable onViewClick={this.getData}/>
                        </div>
                    </div>
                <br/>

                </div>
            </React.Fragment>

        );
    }
}

export default PurchaseRequisitions;