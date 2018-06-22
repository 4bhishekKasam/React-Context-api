import React, { Component } from 'react';
import { MyContext } from './Context';
//const MyContext = React.createContext();

class Neighbour extends Component {
    constructor(props) {
        super(props)
        //   this.state ={}
    }
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {context => (
                        <React.Fragment>
                            <p>Country : {context.state.country}</p>
                            <p>Job : {context.state.job}</p>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}

export default Neighbour;
