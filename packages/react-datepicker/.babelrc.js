/*
 * SPDX-License-Identifier: Apache-2.0
 *
 * The OpenSearch Contributors require contributions made to
 * this file be licensed under the Apache-2.0 license or a
 * compatible open source license.
 *
 * Modifications Copyright OpenSearch Contributors. See
 * GitHub history for details.
 */

var NODE_ENV = process.env.NODE_ENV;
var MODULES = process.env.MODULES;

var modules = MODULES === 'false' || NODE_ENV === 'test' ? 'commonjs' : false;

var config = {
  presets: [
    [
      'env',
      {
        loose: true,
        modules: modules,
        forceAllTransforms: NODE_ENV === 'production',
      },
    ],
    'stage-0',
    'react',
  ],
  plugins: [],
};

if (NODE_ENV === 'development') {
  config.plugins = config.plugins.concat([
    'transform-class-properties',
    [
      'react-transform',
      {
        transforms: [
          {
            transform: 'react-transform-hmr',
            imports: ['react'],
            locals: ['module'],
          },
        ],
      },
    ],
    'add-react-displayname',
  ]);
}

module.exports = config;
