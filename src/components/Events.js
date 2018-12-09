import React, { Component, Fragment } from "react";

import Event from "./Event";

export default class Events extends Component {

    constructor(props) {
        super(props)

        this.loadEvents = this.loadEvents.bind(this);
    }
 

    componentDidMount() {
        if(!this.props.events) {
            this.props.getEvents();
        }
    }

    loadEvents() {
        this.props.getRandomEvents(5);
    }


    render() {
        let content;
        if(!this.props.loading && this.props.eventsRandom && !this.props.eventsError) {
            content = (
                <Fragment>
                    <div className="we-get__container">
                        <button onClick={this.loadEvents} className="we-get__btn">next events</button>
                    </div>
                    <div className="we-events__container">
                        {this.props.eventsRandom.map((evt) => {
                            return (<Event key={evt.id} {...evt} />)})
                        }
                    </div>
                </Fragment>
            );
        }

        return (
            <Fragment>
                <main className="we-content" >
                    {this.props.loading && (<div className="we-loading">loading...</div>) }
                    {content}
                    {this.props.eventsError && (<div className="we-error">{this.props.eventsError}</div>)}
                </main>
            </Fragment>
        );
    }

}