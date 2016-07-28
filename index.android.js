/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import Relay, {
   Route,
   RootContainer,
   DefaultNetworkLayer
 } from 'react-relay'

Relay.injectNetworkLayer(new DefaultNetworkLayer('http://localhost:5000/graphql'))

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class StapleNextAndroid extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <RootContainer
          Component={PersonInfo}
          route={new PersonRoute({personID: '1'})}
          renderFetched={(data) => <PersonInfo {...this.props} {...data} />}
        />
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

class PersonRoute extends Route {
  static paramDefinitions = {
    personID: { required: true }
  }
  static queries = {
    person: () => Relay.QL`
      query {
        person(id: $personID)
      }
    `
  }
  static routeName = 'PersonRoute'
}

class PersonInfo extends Component {
  render () {
    const person = this.props.person
    return (
      <Text>email: {person.email}</Text>
    )
  }
}

PersonInfo = Relay.createContainer(PersonInfo, {
  fragments: {
    person: () => Relay.QL`
      fragment on Person {
        id,
        email
      }
    `
  }
})

AppRegistry.registerComponent('StapleNextAndroid', () => StapleNextAndroid);
