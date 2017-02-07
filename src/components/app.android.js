import React from 'react';
import {
    StyleSheet,
    Button,
    Text,
    View
} from 'react-native';

import { ping } from '../actions';
import styles from './styles';

const styleSheet = StyleSheet.create(styles);

export default ({ isPinging, ping }) => (
    <View style={styleSheet.container}>
        <Text style={styleSheet.welcome}>is pinging: {isPinging.toString()}</Text>
        <Button style={styleSheet.instructions} onPress={ping} title="Start Android" />
    </View>
);