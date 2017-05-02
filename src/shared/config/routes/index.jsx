/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';

import AppHandler from '../../components/AppHandler';

import DashboardSection from '../../components/sections/dashboard';

import StoryListSection from '../../components/sections/story/list';
import StoryAddSection from '../../components/sections/story/add';
import StoryEditSection from '../../components/sections/story/edit';

export default(
  <Router history={browserHistory}>
    <Route path="/" component={AppHandler}>
      <IndexRoute component={DashboardSection} />

      <Route path="story">
        <IndexRoute component={StoryListSection} />
        <Route path="add" component={StoryAddSection} />
        <Route path=":storyId/edit" component={StoryEditSection} />
      </Route>
    </Route>
  </Router>
);
