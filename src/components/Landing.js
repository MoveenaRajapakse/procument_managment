import React, {Component} from 'react';

class Landing extends Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-4">
                    <div align="center" className="col-sm-8 mx-auto">
                        <h1>Procurement Management System</h1>
                        <img src="https://img.icons8.com/nolan/370/structural.png"/>

                    </div>
                    <div align="center" className="col-sm-8 mx-auto">
                        <h3>...For Construction Sites...</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;