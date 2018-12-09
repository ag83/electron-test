import React, { Component } from "react";


export default class Event extends Component {

    render() {
        return (
            <div className="we-event__container">
                <h2 className="we-event__year">
                    {this.props.year}
                </h2>
                {this.props.text}
            </div>
        ); 
    }
}