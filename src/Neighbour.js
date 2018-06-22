import React, { Component } from 'react';
import { MyContext } from './Context';
import FirstNeighbour from './FirstNeighbour';

class Neighbour extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {context => (
                        <React.Fragment>
                            <p><b>This is Neighbours house</b></p>
                            <p>Country : {context.state.country}</p>
                            <p>Job : {context.state.job}</p>
                                                       
                            <FirstNeighbour />  
                        </React.Fragment>
                    )}                   
                </MyContext.Consumer>             
            </div>
        );
    }
}

export default Neighbour;
