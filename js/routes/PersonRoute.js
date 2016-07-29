/**
 * @providesModule PersonRoute
 */
'use strict';

import Relay, {
  Route,
} from 'react-relay';

export default class PersonRoute extends Route {
  static paramDefinitions = {
    personId: { required: true }
  }
  static queries = {
    person: () => Relay.QL`
      query {
        person(id: $personId)
      }
    `
  }
  static routeName = 'PersonRoute'
}
