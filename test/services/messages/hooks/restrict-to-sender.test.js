'use strict';

const assert = require('assert');
const restrictToSender = require('../../../../src/services/messages/hooks/restrict-to-sender.js');

describe('messages restrictToSender hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    restrictToSender()(mockHook);

    assert.ok(mockHook.restrictToSender);
  });
});
