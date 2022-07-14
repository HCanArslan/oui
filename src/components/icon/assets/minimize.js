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

import * as React from 'react';

const OuiIconMinimize = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.146 14.146l4-4a.5.5 0 01.765.638l-.057.07-4 4a.5.5 0 01-.765-.638l.057-.07 4-4-4 4zM6.5 8A1.5 1.5 0 018 9.5v3a.5.5 0 11-1 0v-3a.5.5 0 00-.5-.5h-3a.5.5 0 010-1h3zm2-5a.5.5 0 01.5.5v3a.5.5 0 00.5.5h3a.5.5 0 110 1h-3A1.5 1.5 0 018 6.5v-3a.5.5 0 01.5-.5zm1.651 2.146l4-4a.5.5 0 01.765.638l-.057.07-4 4a.5.5 0 01-.765-.638l.057-.07 4-4-4 4z" />
  </svg>
);

export const icon = OuiIconMinimize;
