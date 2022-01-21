import React, { Component } from 'react'
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native'

class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      largura: new Animated.Value(0)
    }

    this.carregarGrafico = this.carregarGrafico.bind(this)

    /**
     * Executa todos ao mesmo tempo.
    Animated.parallel([

      Animated.timing(
        this.state.largura,
        {
          toValue: 300,
          duration: 2000
        }
      ),

      Animated.timing(
        this.state.altura,
        {
          toValue: 200,
          duration: 2000
        }
      )

    ]).start()*/

    /**
     * Executa um de cada vez.
    Animated.sequence([

      Animated.timing(
        this.state.largura,
        {
          toValue: 300,
          duration: 2000
        }
      ),

      Animated.timing(
        this.state.altura,
        {
          toValue: 200,
          duration: 2000
        }
      )

    ]).start()*/



    /*Animated.timing(
      this.state.altura,
      {
        toValue: 150,
        duration: 2000
      }
    ).start()*/

    Animated.timing(
      this.state.largura,
      {
        toValue: 100,
        duration: 1000
      }
    ).start()
  }


  carregarGrafico() {
    // Animated.sequence([
    //   Animated.timing(
    //     this.state.opacidade,
    //     {
    //       toValue: 1,
    //       duration: 300
    //     }
    //   ),

    //   Animated.timing(
    //     this.state.altura,
    //     {
    //       toValue: 300,
    //       duration: 1000
    //     }
    //   ),

    //   Animated.timing(
    //     this.state.texto,
    //     {
    //       toValue: '#000',
    //       duration: 100
    //     }
    //   )
    // ]).start()
  }

  render() {
    let percentAnimated = this.state.largura.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%']
    })

    return (
      <View style={styles.container}>

        <Animated.View style={{
          backgroundColor: '#0000ff',
          width: percentAnimated,
          height: 25
        }}>

        </Animated.View>

      </View>

      // <View style={{ flex: 1 }}>

      //   <View style={{
      //     height: 70,
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //     flexDirection: 'row',
      //     backgroundColor: '#88e'
      //   }}>

      //       <TouchableOpacity onPress={this.carregarGrafico}>
      //         <Text style={{ fontSize: 20, color: '#fff'}}>
      //           Gerar Grafico
      //         </Text>
      //       </TouchableOpacity>

      //     </View>

      //     <View style={{
      //       flex: 1,
      //       flexDirection: 'column',
      //       justifyContent: 'flex-end',
      //       alignItems: 'center'
      //     }}>
      //       <Text style={{ color: this.state.texto }}>Vendas</Text>
      //       <Animated.View style={{
      //           width: this.state.largura,
      //           height: this.state.altura,
      //           backgroundColor: '#ff0000',
      //           justifyContent: 'center',
      //           opacity: this.state.opacidade
      //       }}>
      //         <Text style={{ fontSize: 20, textAlign: 'center', color: '#fff'}}>
      //         R$150,00
      //         </Text>
      //       </Animated.View>
      //     </View>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
})

export default App
