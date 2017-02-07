import React from 'react';

import { ping } from '../actions';
import styleSheet from './styles';

export default ({ isPinging, ping }) => (
    <div style={styleSheet.container}>
        <h1 style={styleSheet.welcome}>is pinging: {isPinging.toString()}</h1>
        <p style={styleSheet.instructions}><button onClick={ping}>Start</button></p>
    </div>
);