/* eslint max-len: [2, 10000, 4] */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
<<<<<<< HEAD

import StringUtil from '../../../utils/stringUtil';
=======
import _ from 'lodash';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
// import Upload from 'material-ui-upload/Upload';
import { ContentClear } from 'material-ui/svg-icons';
import LinearProgress from 'material-ui/LinearProgress';
>>>>>>> defined create story form input values

export default class ActivityForm extends Component {

  constructor(args) {
    super(args);
    const { userId, panel } = this.props;
    const initData = panel && panel.userId ? panel : {
      date: StringUtil.formatDate(new Date(), 'mm-dd-YYYY'),
      userId,
    };
    this.state = {
      data: initData,
      valid: {},
      touch: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.invalidText = '*required';
    this.entityId = panel && panel.userId ? panel._id : userId;
  }

  handleInputChange(event, newDate) {
    const newState = Object.assign({}, this.state);
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
    const newState = Object.assign({}, this.state);
    const requiredFields = ['title', 'image', 'date'];
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
<<<<<<< HEAD

    return (<div className="container">
      <Link to="/" className="pull-right"><span className="glyphicon glyphicon-remove" /></Link>
=======
    return (<div>
      <Link to="/" className="pull-right">
        <ContentClear />
      </Link>
      <TextField name="title" floatingLabelText="Title" floatingLabelFixed fullWidth onChange={this.handleInputChange} errorText={!valid.name && touch.name ? this.invalidText : null} defaultValue={data.name} />
      <br />
      <h2>Upload Image</h2>
      {/* <Upload onFileLoad={this.onFileLoad} />
    I tried to install this module but I failed. Please teach me how to do it.
      */}
      <br />
      <DatePicker name="date" floatingLabelText="Date" fullWidth onChange={this.handleInputChange} autoOk defaultDate={new Date(data.date)} />
      {/*
          Adjascent panels should be an ordered list of 0 to 4 panel id's. Ordered beacuse each of these panles will be assigned to a navigational position (top, right, bottom, left).

          On author mode, each panel will have up to 4 create-panel-buttons (for each postion), triggering this button should assign the new panel su it's position on the current panel, and the opposite position in the new panel (Ex: if I create new-panel to the right of current-panel; current-panel's right position will have the id for new-panel and new-panel's left postion will have the id of current-panel. Also new-panel will only have 3 create-panel buttons as one of it's positions will be occupied by the old current-panel).
      */}
>>>>>>> defined create story form input values
      <br />
      <div className="form-group">
        <label htmlFor="title" className={!valid.title && touch.title ? 'text-danger' : null}>
            Title
        </label>
        <input type="text" name="title" className="form-control" onChange={this.handleInputChange} value={data.name} />
      </div>
      <div className="form-group">
        <label htmlFor="image" className={!valid.image && touch.image ? 'text-danger' : null}>
          Upload Image
        </label>
        <input type="file" name="image" className="form-control" onChange={this.handleInputChange} />
        <span>[preview] {data.image}</span>
      </div>
      <div className="form-group">
        <label htmlFor="date" className={!valid.date && touch.date ? 'text-danger' : null}>
          Date
        </label>
        <input type="text" name="date" className="form-control" onChange={this.handleInputChange} value={data.date} />
      </div>
      {/*
          Adjascent panels should be an ordered list of 0 to 4 panel id's. Ordered beacuse each of these panles will be assigned to a navigational position (top, right, bottom, left).
          On author mode, each panel will have up to 4 create-panel-buttons (for each postion), triggering this button should assign the new panel su it's position on the current panel, and the opposite position in the new panel (Ex: if I create new-panel to the right of current-panel; current-panel's right position will have the id for new-panel and new-panel's left postion will have the id of current-panel. Also new-panel will only have 3 create-panel buttons as one of it's positions will be occupied by the old current-panel).
      */}
      <button className="btn btn-primary" onTouchTap={this.handleSubmit}>Save</button>
      <br />
      { isProcessing ? 'loading' : null }
    </div>);
  }
}

ActivityForm.propTypes = {
  isProcessing: PropTypes.bool,
  panel: PropTypes.shape({}),
  action: PropTypes.func.isRequired,
  userId: PropTypes.string,
};

ActivityForm.defaultProps = {
  isProcessing: null,
  panel: {},
  userId: null,
};
