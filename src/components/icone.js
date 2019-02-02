import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';


class Icone extends Component {
    render() {
      if (this.props.escolha == 'pedra') {
        return (
          <View style={ styles.playerResult }>
            <Text style={ styles.playerResultText }> {this.props.jogador} </Text>
            <Image source={require('../../imgs/pedra.png')} />
          </View>
        );
      } else if (this.props.escolha == 'papel') {
        return (
          <View style={ styles.playerResult} >
            <Text style={ styles.playerResultText }> {this.props.jogador} </Text>
            <Image source={require('../../imgs/papel.png')} />
          </View>
        );
  
      } else if (this.props.escolha == 'tesoura') {
        return (
          <View style={ styles.playerResult} >
            <Text style={ styles.playerResultText }> {this.props.jogador} </Text>
            <Image source={require('../../imgs/tesoura.png')} />
          </View>
        );
  
      } else {
        return false;
      }
    }
  }


const styles = StyleSheet.create({
    playerResult : {
      alignItems : 'center',
      marginBottom: 20
    },
    playerResultText : {
      fontSize: 18
    }
  });

  export default Icone;