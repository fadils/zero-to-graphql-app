'use strict';

import Colors from 'Colors';
var {
	StyleSheet,
} = require('react-native');

module.exports = StyleSheet.create({
  container: {
    flex: 1,
		backgroundColor: 'white',
    paddingTop: 20,
  },
	toolbar: {
    height: 56,
    backgroundColor: Colors.colorPrimary,
		fontFamily: 'sans-serif-light',
		fontStyle: 'italic'
  },
	header: {
		margin: 16,
		fontSize: 24,
	},
	hr: {
		height: 1,
		backgroundColor: 'black',
	},
	listRowContainer: {
		height: 56,
	},
	listRowCell: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		borderTopColor: 'white',
    borderLeftColor: 'white',
    borderRightColor: 'white',
    borderBottomColor: '#E0E0E0',
		borderWidth: 1,
		paddingLeft: 16,
	}
});
