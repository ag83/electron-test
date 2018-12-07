import React, { Component, Fragment } from 'react';

import EventsContainer from "./containers/EventsContainer";

import './styles/main.css';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <header className="we-header"></header>
                <EventsContainer/>
                <footer className="we-footer"></footer>
            </Fragment>
        );
      }
};