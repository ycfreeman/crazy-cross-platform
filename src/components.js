import { connect } from 'react-redux';

import { ping } from './actions';

import app from './components/app';

export const App = connect(
    (state) => {
        if (!state.hasOwnProperty('isPinging')) {
            return {isPinging: false}
        } else {
            return state
        }
    },
    {ping}
)(app);