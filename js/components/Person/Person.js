/**
 * @providesModule Person
 */

 'use strict';

import Styles from './styles';
import Toolbar from 'Toolbar';
import Drawer from 'Drawer';
import Relay from 'react-relay';
import React, { Component } from 'react';
import {
  View,
  DrawerLayoutAndroid,
  StatusBar,
  Text,
  ListView,
} from 'react-native';

export default class Person extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.__dataID__ !== r2.__dataID__,
    });

    let myDataSource = dataSource.cloneWithRows(this.props.person.friends);

    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Drawer {...this.props}/>}
        ref={'DRAWER'}>
        <View style={Styles.container}>
          <StatusBar
            translucent={true}
            backgroundColor="rgba(255, 160, 0, 0.9)"
            barStyle="light-content"
           />
          <Toolbar
            title = {'Zero To GraphQL'}
            sidebarRef={this} />
          <Text style={Styles.header}>Friends of {this.props.person.firstName}</Text>
          <ListView
            dataSource={myDataSource}
            renderRow={(person) => this.renderRow(person)}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }

  renderRow(person) {
    return (
      <View style={Styles.listRowContainer}>
        <View style={Styles.listRowCell}>
          <Text style={Styles.roboto}>{person.firstName} {person.lastName}</Text>
          <Text style={Styles.roboto}>{person.email}</Text>
        </View>
      </View>
    );
  }

  renderFooter() {
    return (
      <View style={Styles.hr}/>
    );
  }

  _changePersonId(personId, personName) {
		this.props.changePersonId(personId, personName);
	}

  _openDrawer() {
    this.refs['DRAWER'].openDrawer();
  }
}

export default Relay.createContainer(Person, {
  fragments: {
    person: () => Relay.QL`
      fragment on Person {
        id,
        firstName,
        lastName,
        email,
        friends {
          id,
          firstName,
          lastName,
          email
        }
      }
    `
  }
});
