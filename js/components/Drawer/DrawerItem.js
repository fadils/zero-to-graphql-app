/**
 * @providesModule DrawerItem
 */

'use strict';

import Styles from './styles';
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

export default class DrawerItem extends Component {
  render() {
    let selectedStyle = this.props.isSelected ?
      [Styles.name, Styles.nameInList, Styles.selected] :
      [Styles.name, Styles.nameInList];

    return (
      <TouchableOpacity
        onPress={this.props.onPress} >
        <View
          style={Styles.listItem}>
            <Image
              style={Styles.avatarInList}
              source={this.props.avatar} />
            <Text
              style= {selectedStyle}>
              {this.props.personName}
            </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
