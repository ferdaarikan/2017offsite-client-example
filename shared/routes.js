'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../shared/containers/App.js';
import HomePage from '../shared/components/home/HomePage.jsx';
import SearchPage from '../shared/components/search/SearchPage.jsx';
import CmsPage from '../shared/components/cms/CmsPage.jsx';
import NotFoundPage from '../shared/components/notFound/NotFoundPage.jsx';

const requireAccess = () => {

};

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/cms" component={CmsPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);
