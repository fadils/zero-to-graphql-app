'use strict';

var {
	StyleSheet,
} = require('react-native');

module.exports = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  header: {
    width: 300,
    height: 200,
  },
  contentHeader: {
    marginTop: 45,
    marginLeft: 16,
  },
  avatar: {
    height: 80,
    borderRadius: 40,
    width: 80,
  },
  name: {
    color: '#fefefe',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-light',
    marginTop: 10,
  },
  content: {
    marginTop: 16,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
  },
  avatarInList: {
    height: 40,
    borderRadius: 20,
    width: 40,
  },
  nameInList: {
    color: '#727272',
    marginLeft: 16, // 72dp from start: 16 + 40 = avatar's end
    marginTop: 0,
  },
  selected: {
    color: '#212121',
  },
  divider: {
    backgroundColor: '#b6b6b6',
    height: 1,
  }
});
