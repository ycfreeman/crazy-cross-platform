// @flow

import { connect } from 'react-redux';
import _ from 'lodash';

import { ping } from './actions';

import app from './components/app';
import { PingPongState } from './state';

export const App = connect(
    (state: PingPongState): PingPongState => {
        return _.defaults(state, { isPinging: false });
    },
    {ping}
)(app);