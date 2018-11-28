import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.login} style={styles.button}>
          <Text>Click to get data from PHP Backend!</Text>
        </TouchableOpacity>
      </View>
    );
  }
  //login function
  login = () => {
    //get data from app/index.php
    server = 'https://www.ipm.org.gt/app/';
    fetch(server, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
        body: JSON.stringify({
          key: 'test',
        })
    })

    .then((response) => response.json())
    .then((res) => {
      alert(res.message);
    })
    .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    borderWidth: 1,
  }
});
