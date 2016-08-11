/**
 * @providesModule Toolbar
 */
'use strict';

import Styles from './styles';
import React, { Component } from 'react';
import {
  ToolbarAndroid,
  Text,
} from 'react-native';

export default class Toolbar extends Component {
  render() {
    return (
      <ToolbarAndroid
        navIcon = {{uri: "ic_menu_white_24dp", isStatic: true}}
        style = {Styles.toolbar}
        onIconClicked={this._onIconClicked.bind(this)}>
				<Text style={Styles.toolbarTitle}>{this.props.title}</Text>
			</ToolbarAndroid>
    );
	}

  _onIconClicked() {
    this.props.sidebarRef._openDrawer();
  }
}
