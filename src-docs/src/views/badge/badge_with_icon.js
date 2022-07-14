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

import { OuiBadge } from '../../../../src/components';

export default () => (
  <div>
    <OuiBadge color="hollow" iconType="cross" iconSide="right">
      Hollow
    </OuiBadge>

    <OuiBadge iconType="check">Default</OuiBadge>

    <OuiBadge iconType="lensApp" color="primary">
      Primary with an app icon
    </OuiBadge>

    <OuiBadge iconType="returnKey" />
  </div>
);
