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

import {
  OuiPage,
  OuiPageContent,
  OuiEmptyPrompt,
  OuiPageSideBar,
  OuiPageBody,
} from '../../../../src/components';

export default ({ button = <></>, content, sideNav }) => {
  return (
    <OuiPage paddingSize="none">
      <OuiPageSideBar paddingSize="l" sticky>
        {sideNav}
      </OuiPageSideBar>

      <OuiPageBody paddingSize="l">
        <OuiPageContent
          verticalPosition="center"
          horizontalPosition="center"
          paddingSize="none">
          <OuiEmptyPrompt
            title={<span>No spice</span>}
            body={content}
            actions={button}
          />
        </OuiPageContent>
      </OuiPageBody>
    </OuiPage>
  );
};
