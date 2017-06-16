import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { Link } from 'react-router';
import FormData from 'form-data';

export default class ActivityForm extends Component {

  constructor(args) {
    super(args);
    const { panel } = this.props;
    const initData = panel || {};
    this.state = {
      data: initData,
      valid: {},
      touch: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.invalidText = '*required';
    this.extensionsAllowed = ['jpg', 'jpeg', 'png', 'gif'];
  }

  handleInputChange(event) {
    const newState = Object.assign({}, this.state);
    const { name, value } = event.target;

    newState.data[name] = value;
    newState.valid[name] = !!value;
    if (!newState.touch[name]) {
      newState.touch[name] = true;
    }

    this.setState(newState);
  }

  handleFileUpload() {
    const { files } = document.getElementById('file');

    if (files.length) {
      const file = files[0];
      const extension = file.name.split('.').pop().toLowerCase();
      const newState = _.assign({}, this.state);

      if (!newState.touch.file) {
        newState.touch.file = true;
      }
      if (this.extensionsAllowed.indexOf(extension) !== -1) {
        newState.data.file = file.name;
        newState.valid.file = true;
      } else {
        newState.valid.file = false;
      }

      this.setState(newState);
    }
  }

  handleSubmit() {
    const { data } = this.state;
    const newState = _.assign({}, this.state);
    const requiredFields = ['title', 'file'];
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
      const { files } = document.getElementById('file');
      const file = files[0];
      const formData = new FormData();
      formData.append('file', file);
      formData.append('data', JSON.stringify(data));
      this.props.action(formData);
    }
  }

  render() {
    const { isProcessing } = this.props;
    const { data, valid, touch } = this.state;

    return (<div className="">
      <Link to="/" className="pull-right"><span className="glyphicon glyphicon-remove" /></Link>
      <br />
      <div className="form-group">
        <label htmlFor="title" className={!valid.title && touch.title ? 'text-danger' : null}>
            Title
        </label>
        <input
          type="text"
          name="title"
          className="form-control"
          onChange={this.handleInputChange}
          value={data.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image" className={!valid.image && touch.image ? 'text-danger' : null}>
          Upload Image
        </label>
        <input
          type="file"
          id="file"
          name="file"
          onChange={this.handleFileUpload}
          className="form-control"
        />
        <span>[preview] {data.image}</span>
      </div>
      dd
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
};

ActivityForm.defaultProps = {
  isProcessing: null,
  panel: {},
};
