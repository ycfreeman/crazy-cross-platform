// @flow

import Rx from 'rxjs';

import { PING, PONG } from './actions';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import { PingPongState } from './state';

const pingEpic = action$ =>
    action$.ofType(PING)
        .delay(1000) // Asynchronously wait 1000ms then continue
        .mapTo({ type: PONG });

const pingReducer = (state: PingPongState = { isPinging: false }, action): PingPongState => {
    switch (action.type) {
        case PING:
            return { isPinging: true };

        case PONG:
            return { isPinging: false };

        default:
            return state;
    }
};

const epicMiddleware = createEpicMiddleware(pingEpic);

export default (data: PingPongState = { isPinging: false }) => {
    return createStore(pingReducer, data,
        applyMiddleware(epicMiddleware)
    )
};