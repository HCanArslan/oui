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

const OuiIconEditorItemAlignMiddle = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4 7v1H1.5a.5.5 0 010-1H4zm8 0h2.5a.5.5 0 110 1H12V7zM7 1h2a2 2 0 012 2v9a2 2 0 01-2 2H7a2 2 0 01-2-2V3a2 2 0 012-2z" />
  </svg>
);

export const icon = OuiIconEditorItemAlignMiddle;
