import React, { Component, Fragment } from "react";

import Event from "./Event";

export default class Events extends Component {
 

    componentDidMount() {
        if(!this.props.notViewedEvents) {
            this.props.getEvents();
        }
    }


    render() {

        return (
            <Fragment>
                <main className="we-content" >
                    <Event />
                </main>
            </Fragment>
        );
    }

}