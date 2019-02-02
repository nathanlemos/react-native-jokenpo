import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Image } from 'react-native';
import {Topo} from './src/components/topo';
import Icone from './src/components/icone';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    let arr = ['pedra', 'papel', 'tesoura'];
    let n = Math.round(Math.random() * 2);
    let escolhaComputador = arr[n];

    let res = 'Ixe, deu empate';

    if ((escolhaUsuario == 'tesoura' && escolhaComputador == 'papel')
      || (escolhaUsuario == 'papel' && escolhaComputador == 'pedra')
      || (escolhaUsuario == 'pedra' && escolhaComputador == 'tesoura')) {
      res = 'Você venceu, fera!'
    }
    else if ((escolhaComputador == 'tesoura' && escolhaUsuario == 'papel')
      || (escolhaComputador == 'papel' && escolhaUsuario == 'pedra')
      || (escolhaComputador == 'pedra' && escolhaUsuario == 'tesoura')) {
      res = 'Você perdeu, fera!'
    }

    this.setState({ escolhaUsuario: escolhaUsuario, escolhaComputador: escolhaComputador, resultado: res });
  }

  render() {
    return (
      <View>
        <Topo></Topo>

        <View style={styles.panel}>
          <View style={styles.btn}><Button title="pedra" onPress={() => { this.jokenpo('pedra') }} /></View>
          <View style={styles.btn}><Button title="papel" onPress={() => { this.jokenpo('papel') }} /></View>
          <View style={styles.btn}><Button title="tesoura" onPress={() => { this.jokenpo('tesoura') }} /></View>
        </View>

        <View style={styles.results}>
          <Text style={styles.result}>{this.state.resultado}</Text>

          <Icone escolha={this.state.escolhaUsuario} jogador='Você'></Icone>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
        </View>


      </View>
    );
  }
}





const styles = StyleSheet.create({
  btn: {
    width: 90
  },
  panel: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  results: {
    alignItems: 'center'
  },
  result: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
    height: 60,
    paddingTop: 10
  },
  playerResult : {
    alignItems : 'center',
    marginBottom: 20
  },
  playerResultText : {
    fontSize: 18
  }
});