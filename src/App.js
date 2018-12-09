import React, { Component, Fragment } from 'react';

import EventsContainer from "./containers/EventsContainer";

import './styles/main.css';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <header className="we-header"><h1 className="we-header__logo">Wiki today events</h1></header>
                <EventsContainer/>
                <footer className="we-footer"></footer>
            </Fragment>
        );
      }
};