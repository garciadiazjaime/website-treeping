/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import AppHandler from '../../components/AppHandler';

import DashboardSection from '../../components/sections/dashboard';

import PanelViewSection from '../../components/sections/panel/view';
import PanelAddSection from '../../components/sections/panel/add';
import PanelEditSection from '../../components/sections/panel/edit';

export default(
  <Router history={browserHistory}>
    <Route path="/" component={AppHandler}>
      <IndexRoute component={DashboardSection} />

      <Route path="panel">
        <IndexRoute component={PanelViewSection} />
        <Route path="add" component={PanelAddSection} />
        <Route path=":panelId/edit" component={PanelEditSection} />
        <Route path="view" component={PanelViewSection} />
      </Route>
    </Route>
  </Router>
);
