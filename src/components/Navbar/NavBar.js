import React, {Component} from 'react';
import {Link , withRouter} from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken');
        this.props.history.push(`/`)
    }

    render() {

        const loginRegLink = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        <i className="fa fa-sign-in fa-lg"/>&nbsp;&nbsp;<span>Login</span>
                    </Link>
                </li>
            </ul>
        )

        const userLink = (
            <div className="navbar-collapse collapse">
                <ul className="navbar-nav mr-auto" >
                    <li className="nav-item">
                        <Link to="/orders" className="nav-link ">
                            <i className="fa fa-archive fa-lg"/>&nbsp;&nbsp;<span>Order Management</span>
                        </Link>
                    </li>
                    {/*&nbsp; &nbsp; &nbsp; &nbsp;*/}
                    <li className="nav-item">
                        <Link to="/purchase" className="nav-link">
                            <i className="fa fa-th-list fa-lg"/>&nbsp;&nbsp;<span>Purchase Requisitions</span>
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                            <i className="fa fa-sign-out fa-lg"/>&nbsp;&nbsp;<span>Logout</span>
                        </a>
                    </li>
                 </ul>
            </div>

        )

        return(

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-light" style={{height: '60px'}}>

                <a className="navbar-brand brand" href="/"> <img  className="image" alt={"logo"} src={require('../../logo3.png')} />&nbsp;C O N S T R U C T I ON</a>
                &nbsp; &nbsp; ;
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar1">
                    {/*<ul className="navbar-nav">*/}
                    {/*    <li className="nav-item nav-link">*/}
                    {/*        <Link to="/" className="nav-link">*/}
                    {/*            <i className="fa fa fa-home fa-lg"/>&nbsp;&nbsp;<span> Home</span>*/}
                    {/*        </Link>*/}
                    {/*    </li>*/}
                    {/*</ul>*/}
                    {localStorage.usertoken ? userLink: loginRegLink}
                </div>
            </nav>
        )

    }
}

export default withRouter (NavBar);