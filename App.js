import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    borderRadius: 20,
    width: '80%',
    height: '40%',
    justifyContent: 'center'
  },
  textStyle: {
    fontSize: 100,
    textAlign: 'center',
  },
  textInputContainer: {
    paddingTop: 10,
  },
})
let primaryBg = '#eee'
let secondaryBg = '#f8f8f8'
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      bgColors: [primaryBg, secondaryBg],
      bgColor: primaryBg,
      textBgColor: secondaryBg,
      colors: ['#111', '#087f23', '#4caf50', '#ff8a50', '#ff5722'],
      color: '#111',
      changeTime: 6,
    };
  }

  componentDidMount(){
    setInterval(this.inc, 1000)
  }
  changeBgColor(){
    this.setState(prevState => ({
      bgColor: prevState.textBgColor,
      textBgColor: prevState.bgColor,
    }))
  }
  calculateIndex(){
    if (this.state.count % this.state.changeTime === 0) {
      const index = this.state.colors.indexOf(this.state.color)
      return index >= this.state.colors.length - 1 ? 0 : index + 1;
    } else {
      return this.state.colors.indexOf(this.state.color)
    }
  }
  inc = () => {
    if ((this.state.count) % (this.state.changeTime*this.state.colors.length) === 0) {
      this.changeBgColor()
    }
    let newIndex = this.calculateIndex();
    this.setState(prevState => ({
      count: prevState.count + 1,
      color: prevState.colors[newIndex],
    }))
  }

  onChanged = (text) => {
    const number = parseInt(text)
    this.setState({
      changeTime: number,
    })
  }
  reset(){
    this.setState({
      count: 1,
    })
  }
  render() {
    return (
      <View style={[styles.appContainer, { backgroundColor: this.state.bgColor}]}>
        <View 
          style={[styles.textContainer, { backgroundColor: this.state.textBgColor}]}
          onTouchStart={() => this.reset()}
        >
          <Text style={[styles.textStyle, { color: this.state.color}]}>
              {this.state.count - 1}
          </Text>
        </View>
        <View>
          <TextInput 
            style={styles.textInputContainer}
            textAlign='center'
            placeholder="Number"  
            onChangeText={text => this.onChanged(text)}
            keyboardType='number-pad'
          />
        </View>
      </View>
    );
  }
}
