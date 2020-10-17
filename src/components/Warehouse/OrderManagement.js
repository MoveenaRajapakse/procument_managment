import React, {Component} from 'react';
import OderDetailsTable from "./OderDetailsTable";
import axios from "axios";
import Success from "../succeess";
import "../header.css";

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
            warehouse: '',
            msg:''
        }
    }

    //----------------------------------------Get records from the Table----------------------------------------------
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

    //--------------------Load available free warehouses to the drop down when page is loading--------------------------------
    componentDidMount() {
        axios.get('/getFreeSlots')
            .then(response => {
                this.setState({FreewareHouses: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    //---------------------------------get the selected drop down value-----------------------------------
    selectBoxHandler = (event) =>{
        this.setState({
            warehouse:event.target.value
        });
    }

    //--------------------------Assigning the inventory to selected warehouse-----------------------------
    assignWareHouses = (e) =>{
        e.preventDefault();

        const pid = this.state.pid;
        const material = this.state.material;
        const qty = this.state.quantity;
        const wh = this.state.warehouse;

        console.log(material+" "+qty+" "+wh);

        axios.post('https://cors-anywhere.herokuapp.com/https://procure-api.herokuapp.com/updateInventory?quantity='+qty+'&material='+material+'&pid='+wh,{headers:{'Access-Control-Allow-Origin':'*'}}
        ).then(response => {
            console.log(response);
            this.setState({
                msg:'Warehouse Assigned Successfully'
            })
        }).catch(error => {
            console.log(error);
        })

        axios.post('https://cors-anywhere.herokuapp.com/https://procure-api.herokuapp.com/updateRequisitionDelivery?delivery=Deliverd&pid='+pid,{headers:{'Access-Control-Allow-Origin':'*'}}
        ).then(response => {
            console.log(response);
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
                            <h4 className="header">Assigning WareHouses</h4>
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
                        </div>
                        <div className="row">
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
                                           value={this.state.material}
                                           onChange={this.onChange}/>
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
                                           value={this.state.quantity}
                                           onChange={this.onChange}/>
                                </div>
                            </div>
                        </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <label htmlFor="game_name">Free WareHouses</label>
                                            <select id="inputState"  className="form-control" value={this.state.warehouse} onChange={this.selectBoxHandler}>
                                                {
                                                    this.state.FreewareHouses.map(wh =>{
                                                        return(
                                                            <option value={wh.pid} key={wh.pid}>{wh.warehouse}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                </div>
                        <Success>{this.state.msg}</Success>
                        <div className="row" >
                            <div className="col-md-4">
                                <button className="btn btn-success btn-block" onClick={this.assignWareHouses}>Assign</button>
                            </div>

                        </div>

                    </form>
                        </div>
                        <div className="col-8">
                            <h4 className="header">Approved Purchase Requisitions</h4>
                            <OderDetailsTable onViewClick={this.getData}/>
                        </div>
                    </div>
                </div>

                <br/><br/>


            </React.Fragment>

        );
    }
}

export default OrderManagement;