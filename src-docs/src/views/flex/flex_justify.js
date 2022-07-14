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

import React from 'react';

import { OuiFlexGroup, OuiFlexItem } from '../../../../src/components';

export default () => (
  <OuiFlexGroup justifyContent="spaceAround">
    <OuiFlexItem grow={false}>I&rsquo;m a single centered item!</OuiFlexItem>
  </OuiFlexGroup>
);
