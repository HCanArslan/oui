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

const OuiIconEditorItemAlignLeft = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5 5h8a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2zM1.5 1a.5.5 0 01.5.5v13a.5.5 0 11-1 0v-13a.5.5 0 01.5-.5z" />
  </svg>
);

export const icon = OuiIconEditorItemAlignLeft;
