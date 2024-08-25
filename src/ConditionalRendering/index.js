import React, { Component } from 'react';
import HomePage from './HomePage';
import LogInPage from './LogInPage';

class ConditionalRendering extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogIn: true,
        };
    }
    render() {
        const { isLogIn } = this.state;
        let element;
        if (isLogIn) {
            element = < HomePage />;
        }
        else {
            element = < LogInPage />;
        }
        return (
            <div>
                {element}
            </div>
        );
    }
}

export default ConditionalRendering;