import React, {Component} from 'react';
import OderDetailsTable from "./OderDetailsTable";
import {updateInventory} from "./UserFunctions";
import axios from "axios";

class OrderManagement extends Component {

    constructor() {
        super();
        this.state = {
            pid : '',
            status : '',
            quantity:0,
            material:'',
            total:0,
            address:'',
            orderDate:'',
            FreewareHouses: [],
            wareHouse: ''
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

    componentDidMount() {
        axios.get('/getFreeSlots')
            .then(response => {
                this.setState({FreewareHouses: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <React.Fragment>
                <br/>
                <div class="container">
                    <h4>Assigning WareHouses</h4>
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
                                           value={this.state.pid}
                                           onChange={this.onChange}/>
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
                                        value={this.state.supplier}/>
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
                                        value={this.state.material}/>
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
                                           value={this.state.quantity}/>
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="game_name">Free WareHouses</label>
                                    <select id="inputState" className="form-control" value={this.state.wareHouse} onChange={this.onChange}>
                                        {/*{
                                            this.state.FreewareHouses.map(wh =>{
                                                return(
                                                    wh.children.map(sub =>{
                                                        return(
                                                            <option value={sub._id} key={sub._id}>{sub.warehouse}</option>
                                                        )
                                                    })
                                                )
                                            })
                                        }*/}
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row" >
                            <div className="col-md-3">
                                <button className="btn btn-dark btn-block">Assign</button>
                            </div>

                            <div className="col-md-3">
                                <button className="btn btn-dark btn-block">Split</button>
                            </div>
                        </div>

                    </form>
                </div>

                <br/><br/>
                <h4>Available Inventory Details</h4>
                    <OderDetailsTable onViewClick={this.getData}/>

            </React.Fragment>

        );
    }
}

export default OrderManagement;