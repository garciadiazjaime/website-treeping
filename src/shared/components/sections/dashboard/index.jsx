import React from 'react';
import { Link } from 'react-router';

const style = require('./style.scss');

export default class DashBoard extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (<div className={`container ${style.blockWrapper}`}>
      <div className="row">
        <div className="col-sm-4">
          <Link to="/panel/add" className="btn btn-default">Panel</Link>
        </div>
      </div>
    </div>);
  }
}
