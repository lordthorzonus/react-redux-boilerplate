import React, { Component } from 'react';
import { Link } from 'react-router';
/* global styles for app */
import './styles/app.scss';

/* application components */


export class App extends Component {

    render() {
        return (
            <div className="main-wrapper">
                <h1>App</h1>
                <ul>
                    <li><Link to="/example-view">Example async</Link></li>
                </ul>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
