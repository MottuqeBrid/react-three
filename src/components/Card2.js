import React, { Component } from "react";
import { FaAppleWhole } from "react-icons/fa6";
class Card2 extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.name}<FaAppleWhole /></h3>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}
export default Card2;