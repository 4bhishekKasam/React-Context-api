import React, { Component } from 'react';

const MyContext = React.createContext();

class Neighbour extends Component {
    constructor(props){
        super(props)
     //   this.state ={}
    }
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    {context => (
                        <React.Fragment>
                            <p>Country : {context.country}</p>
                            <p>Job : {context.job}</p>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        );
    }
}

export default Neighbour;
