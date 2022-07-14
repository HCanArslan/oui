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

import React from "react";
import DatePicker from "react-datepicker";

export default class FilterDates extends React.Component {
  state = {
    date: null
  };

  handleChange = date => {
    this.setState({
      date: date
    });
  };

  isWeekday = date => {
    const day = date.day();
    return day !== 0 && day !== 6;
  };

  render() {
    return (
      <div className="row">
        <pre className="column example__code">
          <code className="jsx">
            {"<DatePicker"}
            <br />
            {"selected={this.state.date}"}
            <br />
            {"onChange={this.handleChange}"}
            <br />
            <strong>{"filterDate={this.isWeekday}"}</strong>
            <br />
            {'placeholderText="Select a weekday" />'}
          </code>
        </pre>
        <div className="column">
          <DatePicker
            selected={this.state.date}
            onChange={this.handleChange}
            filterDate={this.isWeekday}
            placeholderText="Select a weekday"/>
        </div>
      </div>
    );
  }
}
