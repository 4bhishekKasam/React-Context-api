import React, { Component } from 'react';
import { MyContext } from './Context';
import './App.css';

class FirstNeighbour extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="firstDiv">

                <MyContext.Consumer>
                    {context =>
                        <React.Fragment>
                            <b> This is First Neighbours Home<br /></b>
                            <p>Name :  {context.state.firstName}  {context.state.lastName}</p>
                            <p>My age is : {context.state.age}</p>
                        </React.Fragment>
                    }
                </MyContext.Consumer>
            </div>
        );
    }
}

export default FirstNeighbour;
