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

const OuiIconTableDensityCompact = ({ title, titleId, ...props }) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    aria-labelledby={titleId}
    {...props}>
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16 3v11a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2h12a2 2 0 012 2v1zm-1 0V2a1 1 0 00-1-1H2a1 1 0 00-1 1v1h14zm0 1H1v10a1 1 0 001 1h12a1 1 0 001-1V4zM4.496 7a.5.5 0 010 1H2.495a.5.5 0 010-1h2.001zm5.218 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 8 6 7.776 6 7.5s.128-.5.286-.5h3.428zM4.496 5a.5.5 0 010 1H2.495a.5.5 0 010-1h2.001zm5.218 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 6 6 5.776 6 5.5s.128-.5.286-.5h3.428zM4.496 9a.5.5 0 010 1H2.495a.5.5 0 010-1h2.001zm5.218 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 10 6 9.776 6 9.5s.128-.5.286-.5h3.428zm-5.218 2a.5.5 0 010 1H2.495a.5.5 0 010-1h2.001zm5.218 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 12 6 11.776 6 11.5s.128-.5.286-.5h3.428zm-5.218 2a.5.5 0 010 1H2.495a.5.5 0 010-1h2.001zm9-6a.5.5 0 010 1h-2.001a.5.5 0 010-1h2.001zm0-2a.5.5 0 010 1h-2.001a.5.5 0 010-1h2.001zm0 4a.5.5 0 010 1h-2.001a.5.5 0 010-1h2.001zm0 2a.5.5 0 010 1h-2.001a.5.5 0 010-1h2.001zm0 2a.5.5 0 010 1h-2.001a.5.5 0 010-1h2.001zm-3.782 0c.158 0 .286.224.286.5s-.128.5-.286.5H6.286C6.128 14 6 13.776 6 13.5s.128-.5.286-.5h3.428z" />
  </svg>
);

export const icon = OuiIconTableDensityCompact;
