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

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { requiredProps } from '../../../test';
import { shallow } from 'enzyme';
import { Query } from '../query';
import {
  FieldValueToggleGroupFilter,
  FieldValueToggleGroupFilterProps,
} from './field_value_toggle_group_filter';

describe('TermToggleGroupFilter', () => {
  test('render', () => {
    const props: FieldValueToggleGroupFilterProps = {
      ...requiredProps,
      index: 0,
      onChange: () => {},
      query: Query.parse(''),
      config: {
        type: 'field_value_toggle_group',
        field: 'group',
        items: [
          {
            value: 'kibana',
            name: 'Kibana',
          },
          {
            value: 'es',
            name: 'Elasticsearch',
          },
        ],
      },
    };

    const component = shallow(<FieldValueToggleGroupFilter {...props} />);
    expect(component).toMatchSnapshot();
  });

  test('render - active', () => {
    const props: FieldValueToggleGroupFilterProps = {
      ...requiredProps,
      index: 0,
      onChange: () => {},
      query: Query.parse('group:kibana'),
      config: {
        type: 'field_value_toggle_group',
        field: 'group',
        items: [
          {
            value: 'kibana',
            name: 'Kibana',
          },
          {
            value: 'es',
            name: 'Elasticsearch',
          },
        ],
      },
    };

    const component = shallow(<FieldValueToggleGroupFilter {...props} />);
    expect(component).toMatchSnapshot();
  });

  test('render - active negated', () => {
    const props: FieldValueToggleGroupFilterProps = {
      ...requiredProps,
      index: 0,
      onChange: () => {},
      query: Query.parse('-group:kibana'),
      config: {
        type: 'field_value_toggle_group',
        field: 'group',
        items: [
          {
            value: 'kibana',
            name: 'Kibana',
          },
          {
            value: 'es',
            name: 'Elasticsearch',
          },
        ],
      },
    };

    const component = shallow(<FieldValueToggleGroupFilter {...props} />);
    expect(component).toMatchSnapshot();
  });

  test('render - active negated - custom negated name', () => {
    const props: FieldValueToggleGroupFilterProps = {
      ...requiredProps,
      index: 0,
      onChange: () => {},
      query: Query.parse('-group:kibana'),
      config: {
        type: 'field_value_toggle_group',
        field: 'group',
        items: [
          {
            value: 'kibana',
            name: 'Kibana',
            negatedName: '-Kibana',
          },
          {
            value: 'es',
            name: 'Elasticsearch',
          },
        ],
      },
    };

    const component = shallow(<FieldValueToggleGroupFilter {...props} />);
    expect(component).toMatchSnapshot();
  });
});
