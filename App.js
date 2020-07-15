import React from 'react';
import { View, Button, Text, ScrollView, StyleSheet, Switch } from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 48
  }
})
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  
  componentDidMount(){
    setInterval(this.inc(), 1000)
  }

  inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count}>{this.state.count}</Text>
      </View>
    );
  }
}
