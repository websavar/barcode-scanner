/**
 * @file Tests setup.
 */
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import 'regenerator-runtime/runtime';

global.window.env = {
  mocks: true,
  mockDelay: 2000
};

global.navigator = {
  userAgentData: 'node'
}

const nodeCrypto = require('crypto');
global.crypto = nodeCrypto;