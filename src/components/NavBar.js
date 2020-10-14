import React, {Component} from 'react';
import {Link , withRouter} from 'react-router-dom';

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
                        <h5>Login</h5>
                    </Link>
                </li>
            </ul>
        )

        const userLink = (

            <ul className="navbar-nav mr-auto" >
                <li className="nav-item">
                    <Link to="/orders" className="nav-link ">
                        <h5> Order Management</h5>
                    </Link>
                </li>
                {/*&nbsp; &nbsp; &nbsp; &nbsp;*/}
                <li className="nav-item">
                    <Link to="/purchase" className="nav-link">
                        <h5> Purchase Requisitions</h5>
                    </Link>
                </li>

                {/*&nbsp; &nbsp; &nbsp; &nbsp;*/}
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        <h5> Logout</h5>
                    </a>
                </li>
            </ul>

        )

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height: '60px'}}>
                <a className="navbar-brand text-bold" href="/"><img src="https://img.icons8.com/nolan/45/structural.png"/>&nbsp;Procurement Management</a>
                {/*&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;*/}
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
                    <ul className="navbar-nav">
                        <li className="nav-item nav-link">
                            <Link to="/" className="nav-link">
                                <h5> Home</h5>
                            </Link>
                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink: loginRegLink}
                </div>
            </nav>
        )

    }
}

export default withRouter (NavBar);