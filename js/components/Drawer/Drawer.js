/**
 * @providesModule Drawer
 */

'use strict';

import Colors from 'Colors';
import DrawerItem from 'DrawerItem';
import Styles from './styles';
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

export default class Drawer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    let personFirstName = this.props.person.firstName;
    let personLastName = this.props.person.lastName;
    let personFullName = personFirstName + ' ' + personLastName;
    let personEmail = this.props.person.email;
    let personAvatar;

    switch (personFirstName) {
      case 'Steven':
        personAvatar = require('../../res/images/Steven.png');
        break;
      case 'Adrian':
        personAvatar = require('../../res/images/Adrian.png');
        break;
      case 'Simon':
        personAvatar = require('../../res/images/Simon.png');
        break;
      case 'Guido':
        personAvatar = require('../../res/images/Guido.png');
        break;
    }

    return (
      <View style={Styles.drawer}>
        <View
          style={Styles.header}
          backgroundColor= {Colors.colorPrimary}>
          <View
            style={Styles.contentHeader}>
            <Image
              style={Styles.avatar}
              source={personAvatar} />
            <Text
              style={Styles.name}>
              {personFullName}
            </Text>
            <Text
              style={Styles.name}>
              ({personEmail})
            </Text>
          </View>
        </View>

        <View
          style={Styles.content}>
          <DrawerItem
            personName="Steven Luscher"
            avatar={require('../../res/images/Steven.png')}
            isSelected={personFullName === "Steven Luscher"}
            onPress={() => this._changePersonId('1', 'Steven Luscher')}
            />
          <DrawerItem
            personName="Adrian Holovaty"
            avatar={require('../../res/images/Adrian.png')}
            isSelected={personFullName === "Adrian Holovaty"}
            onPress={() => this._changePersonId('2', 'Adrian Holovaty')}
            />
          <DrawerItem
            personName="Simon Willison"
            avatar={require('../../res/images/Simon.png')}
            isSelected={personFullName === "Simon Willison"}
            onPress={() => this._changePersonId('3', 'Simon Willison')}
            />
          <DrawerItem
            personName="Guido van Rossum"
            avatar={require('../../res/images/Guido.png')}
            isSelected={personFullName === "Guido van Rossum"}
            onPress={() => this._changePersonId('4', 'Guido van Rossum')}
            />
        </View>
      </View>
    );
  }

  _changePersonId(personId, personName) {
    this.props.changePersonID(personId, personName);
  }
}
