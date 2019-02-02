import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

class Topo extends Component {
    render() {
        return (
            <View>
                <Image source={require('../../imgs/jokenpo.png')} />
            </View>
        );
    }
};

class TopoBasico extends Component {
    render()
    {
        return (
            <Text>Topo basicao</Text>
        );
    }
}

export {Topo, TopoBasico};