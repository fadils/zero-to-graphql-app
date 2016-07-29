'use strict'

import Person from 'Person';
import PersonRoute from 'PersonRoute';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  View
} from 'react-native';
import Relay, {
  DefaultNetworkLayer,
  RootContainer,
} from 'react-relay';

Relay.injectNetworkLayer(new DefaultNetworkLayer('http://localhost:5000/graphql'))

export default class ZeroToGraphQl extends Component {
  constructor() {
    super();
    this.state = {
      personId: '1',
    };
  }

  render() {
    let props = {
      person: this.props.person,
      changePersonID: this._changePersonId.bind(this)
    };

    return (
      <View style={styles.container}>
        <RootContainer
          Component={Person}
          route={new PersonRoute({personId: this.state.personId})}
          renderFetched={(data) => <Person {...props} {...data} />}
        />
      </View>
    );
  }

  _changePersonId(id, name) {
    this.setState({personId: id});
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
