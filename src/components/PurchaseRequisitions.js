import React, {Component} from 'react';
import {purchaseRequisitions} from './UserFunctions';
import PurchaseReqTable from "./PurchaseReqTable";

class PurchaseRequisitions extends Component {

    constructor() {
        super();
        this.state = {
            pid : '',
            status : ''
        }
    }



    render() {
        return (
            <React.Fragment>
                {/*<Header />*/}
                <br/>
                <div class="container">
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
                                           /*value={this.state.game_name}
                                           onChange={this.onChange}*//>
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
                                        /*value={this.state.game_name}
                                        onChange={this.onChange}*//>
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
                                        /*value={this.state.game_name}
                                        onChange={this.onChange}*//>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Delivery Address</label>
                                    <input type="text"
                                           className="form-control"
                                           name="address"
                                           id="address"
                                           placeholder="Select the Delivery Address"
                                        /*value={this.state.game_name}
                                        onChange={this.onChange}*//>
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
                                        /*value={this.state.game_name}
                                        onChange={this.onChange}*//>
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
                                        /*value={this.state.game_name}
                                        onChange={this.onChange}*//>
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
                                        /*value={this.state.game_name}
                                        onChange={this.onChange}*//>
                                </div>
                            </div>
                        </div>

                        <div className="row" >
                            {/*&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;*/}
                            <div className="col-md-3">
                                <button className="btn btn-dark btn-block">Accept</button>
                            </div>

                            <div className="col-md-3">
                                <button className="btn btn-dark btn-block">Reject</button>
                            </div>
                        </div>

                    </form>
                </div>
                <br/><br/>
                <h4>Available Purchase Requisitions</h4>
                <PurchaseReqTable/>
            </React.Fragment>

        );
    }
}

export default PurchaseRequisitions;