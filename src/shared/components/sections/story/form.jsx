/* eslint max-len: [2, 500, 4] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import { ContentClear } from 'material-ui/svg-icons';
import LinearProgress from 'material-ui/LinearProgress';

export default class ActivityForm extends Component {

  constructor(args) {
    super(args);
    const { userId, story } = this.props;
    const initData = _.isEmpty(story) ? {
      date: new Date(),
      userId,
    } : story;
    this.state = {
      data: initData,
      valid: {},
      touch: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.invalidText = 'Required';
    this.entityId = _.isEmpty(story) ? userId : story._id;
  }

  handleInputChange(event, newDate) {
    const newState = _.assign({}, this.state);
    if (event) {
      const { name, value } = event.target;
      newState.data[name] = value;
      newState.valid[name] = !!value;
      if (!newState.touch[name]) {
        newState.touch[name] = true;
      }
    } else if (newDate) {
      newState.data.date = newDate;
    }

    this.setState(newState);
  }

  handleSubmit() {
    const { data } = this.state;
    const newState = _.assign({}, this.state);
    const requiredFields = ['name', 'description'];
    let isReady = true;
    requiredFields.map((key) => {
      if (isReady && !data[key]) {
        isReady = false;
      }
      // when user clicks button we show required fields
      if (!newState.touch[key]) {
        newState.touch[key] = true;
      }
      newState.valid[key] = !!data[key];
      return null;
    });
    if (!isReady) {
      this.setState(newState);
    } else {
      this.props.action(this.entityId, data);
    }
  }

  render() {
    const { isProcessing } = this.props;
    const { data, valid, touch } = this.state;
    return (<div>
      <Link to="/" className="pull-right">
        <ContentClear />
      </Link>
      <TextField name="name" floatingLabelText="Name" floatingLabelFixed fullWidth onChange={this.handleInputChange} errorText={!valid.name && touch.name ? this.invalidText : null} defaultValue={data.name} />
      <br />
      <TextField name="description" floatingLabelText="Description" floatingLabelFixed multiLine rows={4} fullWidth onChange={this.handleInputChange} errorText={!valid.description && touch.description ? this.invalidText : null} defaultValue={data.description} />
      <br />
      <DatePicker name="date" floatingLabelText="Date" fullWidth onChange={this.handleInputChange} autoOk defaultDate={new Date(data.date)} />
      <br />
      <RaisedButton label="Save" primary fullWidth onTouchTap={this.handleSubmit} />
      <br />
      { isProcessing ? <LinearProgress mode="indeterminate" /> : null }
    </div>);
  }
}

ActivityForm.propTypes = {
  isProcessing: PropTypes.bool,
  story: PropTypes.shape({}),
  action: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

ActivityForm.defaultProps = {
  isProcessing: null,
  story: {},
  userId: null,
};