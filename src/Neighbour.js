import React, { Component } from 'react';
import { MyContext } from './Context';

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
