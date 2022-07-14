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

import { OuiAccordion, OuiPanel } from '../../../../src/components';

export default () => (
  <OuiAccordion
    id="accordion10"
    arrowDisplay="right"
    buttonContent="This accordion has the arrow on the right">
    <OuiPanel color="subdued">
      Any content inside of <strong>OuiAccordion</strong> will appear here.
    </OuiPanel>
  </OuiAccordion>
);
