import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {App} from './src/components';
import createStore from './src/createStore';

const store = createStore();

export default class app extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}