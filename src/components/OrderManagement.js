import React, {Component} from 'react';
import OderDetailsTable from "./OderDetailsTable";
import {updateInventory} from "./UserFunctions";

class OrderManagement extends Component {

    constructor() {
        super();
        this.state = {
            pid : '',
            materiel : '',
            quantity : ''
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <br/>
                <div class="container">
                    <h4>Updating Inventory</h4>
                    <form>
                        <div className="row">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Order ID</label>
                                    <input type="text"
                                           className="form-control"
                                           name="order_id"
                                           id="order_id"
                                           placeholder="Select a Record"
                                        /*value={this.state.game_name}
                                        onChange={this.onChange}*//>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Supplier</label>
                                    <input type="text"
                                           className="form-control"
                                           name="sup"
                                           id="sup"
                                           placeholder="Select a Record"
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
                                           placeholder="Select a Record"
                                        /*value={this.state.game_name}
                                        onChange={this.onChange}*//>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Quantity</label>
                                    <input type="text"
                                           className="form-control"
                                           name="qty"
                                           id="qty"
                                           placeholder="Select a Record"
                                        /*value={this.state.game_name}
                                        onChange={this.onChange}*//>
                                </div>
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col-md-3">
                                <button className="btn btn-dark btn-block">Accept</button>
                            </div>

                            <div className="col-md-3">
                                <button className="btn btn-dark btn-block">Split</button>
                            </div>
                        </div>

                    </form>
                </div>

                <br/><br/>
                <h4>Available Inventory Details</h4>
                    <OderDetailsTable/>

            </React.Fragment>

        );
    }
}

export default OrderManagement;