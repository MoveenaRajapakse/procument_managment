import React, {Component} from 'react';
import './landing.css';
import {Link} from "react-router-dom";


class Landing extends Component {
    render() {
        return (
            <div className="bg">

                    <div align="left" className="mainText">
                        <img className="img" alt={"logo"} src={require('../logo3.png')} />
                        <h1>C O N S T R U C T I O N</h1>
                    </div>
                    <div align="left" className="subText">
                        <h3>Manage construction sites from a One place.</h3>
                    </div>
                <Link to="/login" className="nav-link"><button type="button" class="btn btn-outline-warning btnStart">GET START</button></Link>

            </div>
        );
    }
}

export default Landing;