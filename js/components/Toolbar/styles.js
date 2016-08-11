'use strict';

import Colors from 'Colors';
import {
	StyleSheet,
} from 'react-native';

module.exports = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: Colors.colorPrimary,
  },

	toolbarTitle: {
		fontSize: 20,
		fontFamily: 'sans-serif-light',
    color: '#ffffff'
	}
});
